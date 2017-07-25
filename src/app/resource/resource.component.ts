import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
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
import { NewProjectService } from '../newproject/newproject.service';
@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {
  //  resourceForm: FormGroup;
  errorMessage = '';
  date: DateModel;
  options: DatePickerOptions;
  // private genericValidator: GenericValidator;
  // private validationMessages: { [key: string]: { [key: string]: string } };
  // displayMessage: { [key: string]: string } = {};
  // @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  error = false;
  formsuccess = false;
  project: Object = {};
  projects: any;
  project_manager: any;
  manager: any;
  ass_names: any;
  freecand: any;
  buttonclicked = false;
  project_name: any;
  involvedproject: any;
  allocated = false;
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, private newprojectservice: NewProjectService)
  { }
  ngOnInit() {
    this.manager = sessionStorage.getItem('username');
    this.project_manager = {
      'project_manager': this.manager
    }
    this.newprojectservice.getTotalProjectdetails(this.project_manager).subscribe(projects => {
      this.projects = projects
      console.log(this.projects)
    });

    this.newprojectservice.getFreeCandidates().subscribe(freecand => {
      this.freecand = freecand
      console.log(this.freecand)
    })

  }

  getDetails(project_name) {
    this.buttonclicked = true;
    this.involvedproject = project_name;   //selected project name
    console.log(this.involvedproject);

    let name = {
      assigned_lead: sessionStorage.getItem('username'),
      project_name: project_name,
      assigned_lead_id: sessionStorage.getItem('user_id')
    }
    // const p = Object.assign(projectname);
    console.log(name);
    this.newprojectservice.getAssigned(name).subscribe(ass_names => {
      this.ass_names = ass_names
      console.log(this.ass_names);

    })
  }
  det: any;

  allocate(username, email) {
    let data = {
      username: username,
      email: email,
      involved_project: this.involvedproject,
      involved_project_id: this.projects[0].id,
      assigned_lead: sessionStorage.getItem('username'),
      assigned_lead_id: sessionStorage.getItem('user_id')
    }
    this.newprojectservice.allocateProject(data).subscribe(det => {
      if (det.success) {
        this.allocated = true;
        this.getDetails(this.involvedproject);
        this.ngOnInit();
      }
    })
    // this.getDetails(this.involvedproject);
  }
  det1: any;
  deallocate(username, email) {
    let data = {
      username: username,
      email: email,

    }
    this.newprojectservice.deallocateProject(data).subscribe(det1 => {
      if (det1.success) {
        //this.allocated =true;
        this.getDetails(this.involvedproject);
        this.ngOnInit();
      }
    })
  }
}







// ngOnInit() {
//     console.log('init');
//     this.genericValidator = new GenericValidator(this.validationMessages);
//     this.resourceForm = this.fb.group({
//       'resource_name': ['', [Validators.required]],
//       'role': ['', [Validators.required]],
//       'task': ['', [Validators.required]],
//     });
//   }
//    ngAfterViewInit(): void {
//     if (this.resourceForm) {
//       const controlBlurs: Observable<any>[] = this.formInputElements
//         .map((formControl: ElementRef) => Observable.fromEvent(formControl.nativeElement, 'blur'));
//       Observable.merge(this.resourceForm.valueChanges, ...controlBlurs).debounceTime(800).subscribe(value => {
//         this.displayMessage = this.genericValidator.processMessages(this.resourceForm);
//       });
//     }
//   }
// addResource() {
//     this.errorMessage = '';

//     // this.error = false;
//     this.errorMessage = '';
//     //this.buttonClicked = true;
//     if (this.resourceForm.valid) {
//       // this.isRequesting = true;
//       var body = {}
//       body['resource_name'] = this.resourceForm.controls['resource_name'].value,
//         body['role'] = this.resourceForm.controls['role'].value,
//         body['task'] = this.resourceForm.controls['task'].value,

//         this.newprojectservice.addNewProject(body)
//           .subscribe(data => {
//             console.log(data);
//             if (data == true) {
//               this.resourceForm.reset();
//               this.formsuccess = true;
//               this.errorMessage = 'Form successful Sent.';
//               //this.router.navigate([this.returnUrl]);
//             } else {
//               this.error = true;
//               this.errorMessage = data.error;
//             }
//             // this.isRequesting = false;
//             //this.buttonClicked = false;
//           });
//     } else {
//       this.error = true;
//       this.errorMessage = ' Please make sure to enter all the fields';
//     }
//   }