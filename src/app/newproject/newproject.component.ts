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
import { NewProjectService } from './newproject.service';
// import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
})
export class NewprojectComponent implements OnInit {
  projectForm: FormGroup;
  errorMessage = '';
  date: DateModel;
  optionsDate: DatePickerOptions;
  public genericValidator: GenericValidator;
  public validationMessages;
  displayMessage;
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  error = false;
  formsuccess = false;


  constructor(public fb: FormBuilder,
    public route: ActivatedRoute,
    public router: Router, public newprojectservice: NewProjectService)
     {
    this.validationMessages = {
      project_name: {
        required: 'Project Name is required'
      },
      company_name: {
        required: 'Company name is required'
      },
      project_manager: {
        required: 'Manager Name is required'
        // maxLength: 'reason should be less than 255 characters'
      },
      start_date: {
        required: 'start date is required'
      },
      end_date: {
        required: 'End date is required'
      },
      req_freezed: {
        required: 'Requirement Freezed is required'
      },
      requirement: {
        required: 'Requirement is required'
      }
    };
  }
managers:any;
  ngOnInit() {
    console.log('init');
    this.genericValidator = new GenericValidator(this.validationMessages);
    this.projectForm = this.fb.group({
      'project_name': ['', [Validators.required]],
      'company_name': ['', [Validators.required]],
      'project_manager': ['', [Validators.required, Validators.maxLength(255)]],
      'start_date': ['', [Validators.required]],
      'end_date': ['', [Validators.required]],
      'req_freezed': ['', [Validators.required]],
      'requirement': ['', [Validators.required]],
    });
    this.newprojectservice.getprojectmanager().subscribe(managers => {
      this.managers = managers
      console.log(this.managers)
    })
  }
  ngAfterViewInit(): void {
    if (this.projectForm) {
      const controlBlurs: Observable<any>[] = this.formInputElements
        .map((formControl: ElementRef) => Observable.fromEvent(formControl.nativeElement, 'blur'));
      Observable.merge(this.projectForm.valueChanges, ...controlBlurs).debounceTime(800).subscribe(value => {
        this.displayMessage = this.genericValidator.processMessages(this.projectForm);
      });
    }
  }
  addProject() {
    this.errorMessage = '';

    // this.error = false;
    this.errorMessage = '';
    //this.buttonClicked = true;
    if (this.projectForm.valid) {
      // this.isRequesting = true;
      var body = {}
      body['project_name'] = this.projectForm.controls['project_name'].value,
        body['company_name'] = this.projectForm.controls['company_name'].value,
        body['project_manager'] = this.projectForm.controls['project_manager'].value,
        body['start_date'] = this.projectForm.controls['start_date'].value.formatted,
        body['end_date'] = this.projectForm.controls['end_date'].value.formatted,
        body['req_freezed'] = this.projectForm.controls['req_freezed'].value,
        body['requirement'] = this.projectForm.controls['requirement'].value,

        this.newprojectservice.addNewProject(body)
          .subscribe(data => {
            console.log(data);
            if (data == true) {
              //this.projectForm.reset();
              this.formsuccess = true;
              this.errorMessage = 'Form successful Sent.';
              this.router.navigate(['./projectmanagement/adash']);
              this.projectForm.reset();
              //this.router.navigate([this.returnUrl]);
            } else {
              this.error = true;
              this.errorMessage = data.error;
            }
            // this.isRequesting = false;
            // this.buttonClicked = false;
          });
    } else {
      this.error = true;
      this.errorMessage = ' Please make sure to enter all the fields';
    }
  }

  fileData:any;

  fileChange(event) 

  {
    let fileList: FileList = event.target.files;
    console.log(fileList);
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      this.fileData =  formData.append('uploadFile', file, file.name);
      console.log(this.fileData);
      // let headers = new Headers();
      // headers.append('Content-Type', 'multipart/form-data');
      // headers.append('Accept', 'application/json');
      // let options = new RequestOptions({ headers: headers });
      // this.http.post(`${this.apiEndPoint}`, formData, options)
      //   .map(res => res.json())
      //   .catch(error => Observable.throw(error))
      //   .subscribe(
      //   data => console.log('success'),
      //   error => console.log(error)
      //   )

    }
  }

}