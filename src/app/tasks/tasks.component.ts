import { Component, OnInit, AfterViewInit, ViewChild, ViewChildren, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericValidator } from '../common/generic-validator';
import { CustomValidators } from 'ng2-validation';
import { FormGroup, FormArray, FormBuilder, Validators, FormControlName } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { NewProjectService } from '../newproject/newproject.service';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
    taskForm: FormGroup;
    addmore_length;
    error = false;
    errorMessage = '';
    // displayMessage: { [key: string]: string } = {};
    public genericValidator: GenericValidator;
    public validationMessages;
    formsuccess = false;
    buttonClicked = false;
    @ViewChildren(FormControlName, {
        read: ElementRef
    }) formInputElements: ElementRef[];
    
    det :Array<any>= [];
    constructor(public fb: FormBuilder,
        // public api:ApiService,
        public _router: Router, public api: NewProjectService) { };
    users: Array<any> = [

        { username: 'Karthick' },
        {
            username: 'Rohith' //className: ['office-header', 'text-success'], // sort: false, //filtering: {filterString: '', placeholder: 'Filter by position'}
        },
        { username: 'Poorna' },
        { username: 'Meher' },
        { username: 'manoj' },
        { username: 'krishna' },
        { username: 'Durga Prasad' }
    ];
//     status :Array<any> =[
// { status: 'In Progress' },
//         { status: 'Completed' },
        
//     ];
tasks:any;
names:any;
 assigned_lead_id= sessionStorage.getItem('user_id');
    ngOnInit() {
        this.taskForm = this.fb.group({

            activeList: this.fb.array([]),

        });

        this.addactiveList();
        this.genericValidator = new GenericValidator(this.validationMessages);
        let val={
            assigned_lead_id : sessionStorage.getItem('user_id')
        }
        let data = {
      lead_id : sessionStorage.getItem('user_id')
    }

        this.api.getTaskStatus(data).subscribe(tasks => {
            this.tasks = tasks
        })

        this.api.getNames(val).subscribe(names => {
            this.names = names
        })
        console.log(val)
        
    }

    addactiveList() {

        const control = <FormArray>this.taskForm.controls['activeList'];
        const addrCtrl = this.initLink();
        control.push(addrCtrl);

        console.log(control.length);
        this.addmore_length = (control.length);

    }
    rem_length;
    removeList(i: any) {
        console.log(i);
        // this.addmore_length=i;
        const control = <FormArray>this.taskForm.controls['activeList'];
        this.rem_length = ((<FormArray>this.taskForm.controls['activeList']).length);
        console.log(this.rem_length);

        //const addrCtrl = this.initLink();
        control.removeAt((<FormArray>this.taskForm.controls['activeList']).length - 1);
        this.addmore_length = this.rem_length;
        console.log(this.addmore_length);

    }
    initLink() {
        return this.fb.group({
            task_name: ['', Validators.required],
            start_date: ['', Validators.required],
            end_date: ['', Validators.required],
           // days_left: ['', Validators.required],
            assigned_to: ['', Validators.required],
           // over_due: ['', Validators.required],
           // status :['', Validators.required]

        });
    }
    ngAfterViewInit(): void {
        if (this.taskForm) {
            const controlBlurs: Observable<any>[] = this.formInputElements
                .map((formControl: ElementRef) => Observable.fromEvent(formControl.nativeElement, 'blur'));

            Observable.merge(this.taskForm.valueChanges, ...controlBlurs).debounceTime(800).subscribe(value => {
                //  this.displayMessage = this.genericValidator.processMessages(this.taskForm);
            });
        }
    }
    save() {
        console.log(this.taskForm.value);
        
              this.det['lead_id'] = sessionStorage.getItem('user_id');
            //  this.taskForm['lead_id'] = sessionStorage.getItem('user_id');
          // console.log( this.taskForm.controls.activeList['start_date'].value.formatted);
        // let  lead_id = sessionStorage.getItem('user_id');
            const p = Object.assign(this.taskForm.value,this.det);
            console.log(p);
      
        if (this.taskForm.valid) {
            this.api.addTaskStatus(p)
                .subscribe(data => {
                    console.log(data);
                    if (data.success) {
                        this.taskForm.reset();
                        this.formsuccess = true;
                        this.errorMessage = 'Form successful Sent.';
                         this.ngOnInit();
                        //this.router.navigate([this.returnUrl]);
                    } else {
                        this.error = true;
                        this.errorMessage = data.error;
                    }
                    // this.isRequesting = false;
                    //this.buttonClicked = false;
                });
        } else {
            this.error = true;
            this.errorMessage = ' Please make sure to enter all the fields';
        }
       
    }

}
