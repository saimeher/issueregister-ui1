import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import { ReactiveFormsModule,FormControlName,FormsModule,Form,FormGroup,FormBuilder, Validators, AbstractControl, ValidatorFn} from '@angular/forms';
import { GenericValidator } from '../common/generic-validator';
import { CustomValidators } from 'ng2-validation';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import {NewProjectService} from '../newproject/newproject.service';
import * as moment from 'moment';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  selectedDate;
selectedDate1;
selectedDate2;
today;
today1;
today2:any;
today3:any;
today4:any;
today5:any;
today6:any;
today7:any;
today8:any;
today9:any;
today10:any;
today11:any;
today12:any;
today13:any;
selectedDate3:any;
selectedDate4 :any;
selectedDate5:any;
selectedDate6:any;
selectedDate7:any;
selectedDate8:any;
selectedDate9:any;
selectedDate10:any;
selectedDate11:any;
selectedDate12:any;
selectedDate13:any;


timeline_form:FormGroup;
 errorMessage = '';
  date: DateModel;
  proDet: any;
  options: DatePickerOptions;
  private genericValidator: GenericValidator;
  private validationMessages: { [key: string]: { [key: string]: string } };
  displayMessage: { [key: string]: string } = {};
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  error = false;
formsuccess = false;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,private newprojectservice:NewProjectService) { 
 this.validationMessages = {
   project_name :{
     required:'Project name is required'
   },
    req_diss_startdate:{
      required: 'Requirement discussion start date is required'
    },
    req_diss_enddate:{
      required: 'Requirement discussion end date is required'
    },
    design_diss_startdate:{
      required :'Design Discussion start date is required '
    },
    design_diss_enddate:{
      required :'Design Discussion end date is required '
    },
    dev_startdate:{
      required:'Development start date is required'
    },
    dev_enddate:{
      required:'Development end date is required'
    },
    testing_startdate:{
      required:'Testing start date is required'
    },
    testing_enddate:{
      required:'Testing end date is required'
    },
    deploy_startdate:{
      required:'Deployment start date is required'
    },
     deploy_enddate:{
      required:'Deployment end date is required'
    },
     beta_startdate:{
      required:'Development start date is required'
    },
    beta_enddate:{
      required:'Beta start date is required'
    },
    roleout_startdate:{
      required:'Role out start date is required'
    },
    roleout_enddate:{
      required:'Role out end date is required'
    }
    };

    }
projects:any;
  ngOnInit() {
    console.log('init');
    this.genericValidator = new GenericValidator(this.validationMessages);
    this.timeline_form = this.fb.group({
      'project_name':['',[Validators.required]],
      'req_diss_startdate': ['', [Validators.required]],
      'req_diss_enddate': ['', [Validators.required]],
      'design_diss_startdate': ['', [Validators.required]],
      'design_diss_enddate': ['', [Validators.required]],
      'dev_startdate': ['', [Validators.required]],
      'dev_enddate': ['', [Validators.required]],
      'testing_startdate': ['', [Validators.required]],
      'testing_enddate': ['', [Validators.required]],
      'deploy_startdate': ['', [Validators.required]],
      'deploy_enddate': ['', [Validators.required]],
      'beta_startdate': ['', [Validators.required]],
      'beta_enddate': ['', [Validators.required]],
      'roleout_startdate': ['', [Validators.required]],
      'roleout_enddate': ['', [Validators.required]],
    });
    let data = {
      lead_id : sessionStorage.getItem('user_id')
    }
    this.newprojectservice.getProjectNames(data).subscribe(projects => {
      this.projects =projects
      console.log(this.projects)
    });
         
  }
    ngAfterViewInit(): void {
    if (this.timeline_form) {
      const controlBlurs: Observable<any>[] = this.formInputElements
        .map((formControl: ElementRef) => Observable.fromEvent(formControl.nativeElement, 'blur'));
      Observable.merge(this.timeline_form.valueChanges, ...controlBlurs).debounceTime(800).subscribe(value => {
        this.displayMessage = this.genericValidator.processMessages(this.timeline_form);
      });
    }
  }

addtimeline()
{
    this.errorMessage = '';
     
   // this.error = false;
    this.errorMessage = '';
    //this.buttonClicked = true;
    if (this.timeline_form.valid) {
     // this.isRequesting = true;
     var body ={}
     body['project_name'] = this.timeline_form.controls['project_name'].value,
     body['req_diss_startdate'] = this.timeline_form.controls['req_diss_startdate'].value.formatted,
       body['req_diss_enddate']  = this.timeline_form.controls['req_diss_enddate'].value.formatted,
     body['design_diss_startdate'] =  this.timeline_form.controls['design_diss_startdate'].value.formatted,
       body['design_diss_enddate'] = this.timeline_form.controls['design_diss_enddate'].value.formatted,
       body['dev_startdate']  =this.timeline_form.controls['dev_startdate'].value.formatted,
      body['dev_enddate']  = this.timeline_form.controls['dev_enddate'].value.formatted,
      body['testing_startdate'] = this.timeline_form.controls['testing_startdate'].value.formatted,
      body['testing_enddate'] = this.timeline_form.controls['testing_enddate'].value.formatted,
      body['deploy_startdate'] = this.timeline_form.controls['deploy_startdate'].value.formatted,
      body['deploy_enddate'] = this.timeline_form.controls['deploy_enddate'].value.formatted,
      body['beta_startdate'] = this.timeline_form.controls['beta_startdate'].value.formatted,
      body['beta_enddate'] = this.timeline_form.controls['beta_enddate'].value.formatted,
      body['roleout_startdate'] = this.timeline_form.controls['roleout_startdate'].value.formatted,
      body['roleout_enddate'] = this.timeline_form.controls['roleout_enddate'].value.formatted,

      
      this.newprojectservice.addNewTimeline(body)
        .subscribe(data => {
          console.log(data);
          if (data.data == true) {
            //this.timeline_form.reset();
            this.formsuccess = true;
            this.errorMessage = 'Form successful Sent.';

            //this.router.navigate([this.returnUrl]);
          } else {
            this.error = true;
            this.errorMessage = data.error;
          }
         
        });
    } else {
      this.error = true;
      this.errorMessage = ' Please make sure to enter all the fields';
    }
  }
 i=0;
selected_name:any='';
  getproject($event)
  {
    console.log($event.target.value);
    this.selected_name= $event.target.value
    let data = {
    'project_name':$event.target.value,
  }
   this.newprojectservice.getStatProName(data).subscribe(proDet => {
    this.proDet = proDet
this.today=proDet[0].req_diss_startdate;
 console.log( proDet[0].req_diss_enddate);
if(proDet[0].req_diss_enddate!='Invalid date'){
this.today1 = proDet[0].req_diss_enddate;
}else{
  console.log( proDet[0].req_diss_enddate);
 
this.today1 =moment("1111-01-01"); 
}

this.today2=proDet[0].design_diss_startdate;
this.today3=proDet[0].design_diss_enddate;
this.today4=proDet[0].dev_startdate;
this.today5=proDet[0].dev_enddate;
this.today6=proDet[0].testing_startdate;
this.today7=proDet[0].testing_enddate;
this.today8=proDet[0].deploy_startdate;
this.today9=proDet[0].deploy_enddate;
this.today10=proDet[0].beta_startdate;
this.today11=proDet[0].beta_enddate;
this.today12=proDet[0].roleout_startdate;
this.today13=proDet[0].roleout_enddate;

 //this.today ='2017-05-19';
 console.log(this.today);
 console.log(this.today1);
 
 let dateModel:DateModel = new DateModel();
    
let momentObj = moment(this.today, "YYYY-MM-DD");

dateModel.momentObj = momentObj;
dateModel.formatted = momentObj.format("YYYY-MM-DD");
this.selectedDate = dateModel;
console.log(this.today);

//this.selectedDate1=proDet.req_start_date;
 let dateModel1:DateModel = new DateModel();
 let momentObj1 = moment(this.today1, "YYYY-MM-DD");
//  dateModel1.momentObj = momentObj1;
dateModel1.formatted = momentObj1.format("YYYY-MM-DD");
this.selectedDate1 = dateModel1;
//
let dateModel2:DateModel = new DateModel();
 let momentObj2 = moment(this.today2, "YYYY-MM-DD");
//  dateModel1.momentObj = momentObj1;
dateModel2.formatted = momentObj2.format("YYYY-MM-DD");
this.selectedDate2 = dateModel2;
 

 let dateModel3:DateModel = new DateModel();
 let momentObj3 = moment(this.today3, "YYYY-MM-DD");
//  dateModel1.momentObj = momentObj1;
dateModel3.formatted = momentObj3.format("YYYY-MM-DD");
this.selectedDate3 = dateModel3;





let dateModel4:DateModel = new DateModel();
 let momentObj4 = moment(this.today4, "YYYY-MM-DD");
//  dateModel1.momentObj = momentObj1;
dateModel4.formatted = momentObj4.format("YYYY-MM-DD");
this.selectedDate4 = dateModel4;

let dateModel5:DateModel = new DateModel();
 let momentObj5 = moment(this.today5, "YYYY-MM-DD");
//  dateModel1.momentObj = momentObj1;
dateModel5.formatted = momentObj5.format("YYYY-MM-DD");
this.selectedDate5 = dateModel5;

let dateModel6:DateModel = new DateModel();
 let momentObj6 = moment(this.today6, "YYYY-MM-DD");
//  dateModel1.momentObj = momentObj1;
dateModel6.formatted = momentObj6.format("YYYY-MM-DD");
this.selectedDate6 = dateModel6;

let dateModel7:DateModel = new DateModel();
 let momentObj7 = moment(this.today7, "YYYY-MM-DD");
//  dateModel1.momentObj = momentObj1;
dateModel7.formatted = momentObj7.format("YYYY-MM-DD");
this.selectedDate7 = dateModel7;

let dateModel8:DateModel = new DateModel();
 let momentObj8 = moment(this.today8, "YYYY-MM-DD");
//  dateModel1.momentObj = momentObj1;
dateModel8.formatted = momentObj8.format("YYYY-MM-DD");
this.selectedDate8 = dateModel8;

let dateModel9:DateModel = new DateModel();
 let momentObj9 = moment(this.today9, "YYYY-MM-DD");
//  dateModel1.momentObj = momentObj1;
dateModel9.formatted = momentObj9.format("YYYY-MM-DD");
this.selectedDate9 = dateModel9;

let dateModel10:DateModel = new DateModel();
 let momentObj10 = moment(this.today10, "YYYY-MM-DD");
//  dateModel1.momentObj = momentObj1;
dateModel10.formatted = momentObj10.format("YYYY-MM-DD");
this.selectedDate10 = dateModel10;

let dateModel11:DateModel = new DateModel();
 let momentObj11 = moment(this.today11, "YYYY-MM-DD");
//  dateModel1.momentObj = momentObj1;
dateModel11.formatted = momentObj11.format("YYYY-MM-DD");
this.selectedDate11 = dateModel11;


let dateModel12:DateModel = new DateModel();
 let momentObj12 = moment(this.today12, "YYYY-MM-DD");
//  dateModel1.momentObj = momentObj1;
dateModel12.formatted = momentObj12.format("YYYY-MM-DD");
this.selectedDate12 = dateModel12;


let dateModel13:DateModel = new DateModel();
 let momentObj13 = moment(this.today13, "YYYY-MM-DD");
//  dateModel1.momentObj = momentObj1;
dateModel13.formatted = momentObj13.format("YYYY-MM-DD");
this.selectedDate13 = dateModel13;
 
  })
  }



}
