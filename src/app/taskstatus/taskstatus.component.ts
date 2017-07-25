import { Component, OnInit } from '@angular/core';
// import { FilterByPipe } from './filter.pipe';
import { NewProjectService } from '../newproject/newproject.service';
import { ReactiveFormsModule,FormsModule,Form,FormGroup,FormBuilder, Validators, AbstractControl, ValidatorFn} from '@angular/forms';
@Component({
  selector: 'app-taskstatus',
  templateUrl: './taskstatus.component.html',
  styleUrls: ['./taskstatus.component.css']
})
export class TaskstatusComponent implements OnInit {
taskeditForm:FormGroup;
  public filterQuery = "";
  public rowsOnPage = 5;
  public sortBy = "name";
  public sortOrder = "asc";
constructor(public api:NewProjectService,public fb:FormBuilder) { 
  this.taskeditForm=this.fb.group({
      task: ['',Validators.required],
      assigned_to:['',Validators.required],
       start_date: ['',Validators.required],
    end_date:['',Validators.required],
    days_left:['',Validators.required],
    over_due:['',Validators.required],
    status :['',Validators.required],
    id:['',Validators.required]
  })
}

errorMessage = 'changes saved Successfully';
formsuccess = false;
taskdata:any;
manager: any;
 project_manager: any;
 projects : any;
 data:any;
  // objectsFilter = {task: ''};
  // search: "";

  ngOnInit() 
  {
    //  this.manager = sessionStorage.getItem('username');
    // this.project_manager = {
    //   'project_manager': this.manager
    // }
    let taskdata = {
      lead_id : sessionStorage.getItem('user_id')
    }
    this.api.getTaskStatus(taskdata).subscribe(data => {
      this.data = data;
      console.log(data);
    })
    
    //  this.api.getTotalProjectdetails(this.project_manager).subscribe(projects => {
    //   this.projects = projects
    //   console.log(this.projects)
    // });
  }
  

  edit(value){
     this.taskeditForm.patchValue(value);
  }
  editTask(){
    this.api.editTask(this.taskeditForm.value).subscribe(det=>{
      console.log(det);
        if(det.success){
          this.formsuccess = true;
          
          this.taskeditForm.reset();
          this.ngOnInit();
        }
    })
  }
}
