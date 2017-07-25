import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import {NewProjectService} from '../newproject/newproject.service';
import { ReactiveFormsModule, FormControlName, FormsModule, Form, FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { GenericValidator } from '../common/generic-validator';
import { CustomValidators } from 'ng2-validation';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';

@Component({
  selector: 'app-projectstats',
  templateUrl: './projectstats.component.html',
  styleUrls: ['./projectstats.component.css']
})
export class ProjectStatsComponent implements OnInit {
manager:any;
project_manager:any;
projects:any;
tstatus_form:FormGroup;
pname:any;
stat:any;
pro_name:any;
stag:any;
selected= false;
errorMessage:any;
error:any;
formsuccess = false;

  public genericValidator: GenericValidator;
  public validationMessages: { [key: string]: { [key: string]: string } };
  displayMessage: { [key: string]: string } = {};
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  constructor(public fb: FormBuilder,
    public route: ActivatedRoute,
    public router: Router, public newprojectservice: NewProjectService) {
    this.validationMessages = {
      project_name: {
        required: 'Project Name is required'
      },
      stage: {
        required: 'Stage is required'
      },
      status: {
        required: 'Status is required',
        // maxLength: 'reason should be less than 255 characters'
      },
    };

  }
ngAfterViewInit(): void {
    if (this.tstatus_form) {
      const controlBlurs: Observable<any>[] = this.formInputElements
        .map((formControl: ElementRef) => Observable.fromEvent(formControl.nativeElement, 'blur'));
      Observable.merge(this.tstatus_form.valueChanges, ...controlBlurs).debounceTime(800).subscribe(value => {
        this.displayMessage = this.genericValidator.processMessages(this.tstatus_form);
      });
    }
  }

// status :any;

stages: Array<any> = [

        { stage: 'Requirement' },
        {stage: 'Design' },
        { stage: 'Development' },
        { stage: 'Testing' },
        { stage: 'Deployment' },
        { stage: 'Beta Release' },
        { stage: 'Role out' }
    ];

    statuss :Array<any> =[
        { status: 'In Progress' },
        { status: 'Completed' },
        { status: 'open' },
    ];

statu:any;
  ngOnInit() {
console.log('init');
    this.genericValidator = new GenericValidator(this.validationMessages);
    this.tstatus_form = this.fb.group({
      'project_name': ['', [Validators.required]],
      'stage': ['', [Validators.required]],
      
      'status': ['', [Validators.required]]
      
    });

    console.log('okkkkkkkkk')
   //  this.manager = sessionStorage.getItem('username');
   this.project_manager={
     'project_manager':sessionStorage.getItem('username')
   }
    this.newprojectservice.getTotalProjectdetails(this.project_manager).subscribe(projects => {
      this.projects = projects
      console.log(this.projects)
    });
  }
getDetails(projectname){
  this.selected = true;
  this.pname = projectname;
  let data = {
    'project_name': projectname,
  }
  this.newprojectservice.getStatProName(data).subscribe( stat => {
    this.stat = stat
    console.log(this.stat)
    this.pro_name = this.stat[0].project_name;
    this.stag = this.stat[0].stage;
    this.statu = this.stat[0].status
;  }
)

}

addStatus(){
   var body = {}
      body['project_name'] = this.pname,
        body['status'] = this.tstatus_form.controls['status'].value,
        body['stage'] = this.tstatus_form.controls['stage'].value
       this.newprojectservice.addStat(body).subscribe(data => {

            console.log(data);
            if (data.success == true) {
              this.tstatus_form.reset();
              this.formsuccess = true;
              this.errorMessage = 'Status Updation successful .';
              //this.router.navigate([this.returnUrl]);
            } else {
              this.error = true;
              this.errorMessage = data.error;
            }
            // this.isRequesting = false;
       })



}
}
