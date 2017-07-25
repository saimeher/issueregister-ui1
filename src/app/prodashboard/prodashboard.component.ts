import { Component, OnInit } from '@angular/core';
import {NewProjectService} from '../newproject/newproject.service';

@Component({
  selector: 'app-prodashboard',
  templateUrl: './prodashboard.component.html',
  styleUrls: ['./prodashboard.component.css']
})
export class ProdashboardComponent implements OnInit {

  constructor(private api:NewProjectService) { }
proDet:any;
date:any;
datee:any;
proMem:any;
statData:any;
newdate:any;
strtdate:any;
statData1: any;

  ngOnInit() {
    
  
   let data = {
     project_manager:sessionStorage.getItem('username'),
   }
  //  let data1 = {
  //    'lead_id': sessionStorage.getItem('user_id')

  //  }
  this.api.getManPro(data).subscribe(proDet => {
    this.proDet =proDet
    console.log(this.proDet[0].start_date)
    this.strtdate = this.proDet[0].start_date

  })
  this.api.getMemPro(data).subscribe(proMem =>{
    this.proMem = proMem
    console.log('promem', this.proMem)
  })

  this.getDate();
  // this.getStat(project_manager);
}

getStat(username){

  let data = {
    'assigned_to' : username,
    'lead_id': sessionStorage.getItem('user_id')
  }
  this.api.getTaskStat(data).subscribe(statData => {
    this.statData = statData
  })
}
startdate:any;

getStatin(username){

  let data1 = {
    'assigned_to' : username,
    'lead_id': sessionStorage.getItem('user_id')
  }
  this.api.getTaskStatin(data1).subscribe(statData1 => {
    this.statData1 = statData1
  })
  console.log(this.statData1)
}

getDate(){
// this.date = new Date().toISOString().split('T')[0];

// var one_day = 1000 * 60 * 60 * 24;
//         var date1 = new Date(this.date);
//         var date2 = new Date(this.startdate);
//         var date1_ms = date1.getTime();
//         var date2_ms = date2.getTime();
//         var diff_ms = date2_ms - date1_ms + one_day;
//         var count = Math.round(diff_ms / one_day);
//         console.log(Math.round(diff_ms / one_day), "  <=== time");
//  this.startdate={
//    startdate: this.proDet[0].start_date 
//   };
  // var oneDay = 24*60*60*1000; 
  //  this.datee = Math.round(Math.abs((this.newdate -this.strtdate)/(oneDay)));
}

}
