import { Component, OnInit } from '@angular/core';
import {NewProjectService} from '../newproject/newproject.service';


@Component({
  selector: 'app-adash',
  templateUrl: './adash.component.html',
  styleUrls: ['./adash.component.css']
})
export class AdashComponent implements OnInit {

 constructor(private api:NewProjectService) { }
proDet:any;

  ngOnInit() {
  
    this.api.getTotalProjectsadmin()
          .subscribe(proDet => {
                        this.proDet = proDet
                            console.log(this.proDet)
                          })
}
}
