import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {NewProjectService} from '../newproject/newproject.service'

@Component({
  selector: 'app-projectmanagement',
  templateUrl: './projectmanagement.component.html',
  styleUrls: ['./projectmanagement.component.css']
})
export class ProjectmanagementComponent implements OnInit {

   constructor(public router:Router,public api:NewProjectService,private activeR:ActivatedRoute) { }

  ngOnInit() {
        this.activeR.params.subscribe(params=>{
      this.api.livePage=params['livePage'];
      console.log(params['livePage']);
      console.log(this.api.livePage);
      
    })
     this.api.role = sessionStorage.getItem('role');
  }

sidebarchage(type:string)
{
  this.api.livePage=type;
 
  this.router.navigate(['/projectmanagement/'+type]);
  console.log("page is:"+type);

//this.page_name=type;
}

}
