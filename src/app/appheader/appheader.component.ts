import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent implements OnInit {
 name = sessionStorage.getItem("name");
 user_type = sessionStorage.getItem("user_type");

  constructor() { }

  ngOnInit() {
  }

}
