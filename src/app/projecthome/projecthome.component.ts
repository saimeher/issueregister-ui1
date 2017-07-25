import { Component, OnInit } from '@angular/core';
import {NewProjectService} from '../newproject/newproject.service';
@Component({
  selector: 'app-projecthome',
  templateUrl: './projecthome.component.html',
  styleUrls: ['./projecthome.component.css']
})
export class ProjecthomeComponent implements OnInit {

  constructor(private api:NewProjectService) { }
total:any;
closed:any;
progress:any;
proDet:any;
totalPro = true;
progressCount:any;
closedCount:any;
  ngOnInit() {
    this.api.getTotalProjects().subscribe(total => {
      this.total = total
      console.log(this.total)
    })
    this.api.getInProgresscount().subscribe(progressCount =>{
      this.progressCount = progressCount[0].total

      console.log(this.progressCount)
    })
    this.api.getClosedcount().subscribe(closedCount => {
      this.closedCount = closedCount[0].total
      console.log(this.closedCount)
    })
  }
getTotalprojects()
{
  this.totalPro = false;
  this.api.getTotalPro().subscribe(proDet => {
    this.proDet =proDet
  })
}
back(){
  this.totalPro = true;
}
getClosedProjects(){

}
}
