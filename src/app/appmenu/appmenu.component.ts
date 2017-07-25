import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';
import {NewProjectService} from '../newproject/newproject.service';
@Component({
  selector: 'app-appmenu',
  templateUrl: './appmenu.component.html',
  styleUrls: ['./appmenu.component.css']
})
export class AppmenuComponent implements OnInit {
@Output() selectedpage=new EventEmitter();


  constructor(public api:NewProjectService) { }
lead:any;
  ngOnInit() {
    //this.lead = sessionStorage.getItem('role');
  }
sidebarchage(type:string){
//  this.api.livePage=
this.selectedpage.emit(type);
}
}
