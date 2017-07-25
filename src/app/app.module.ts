import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { NgModule,ElementRef } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DatePickerModule } from 'ng2-datepicker';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
// import { AppregisterComponent } from './appregister/appregister.component';
import { ApploginComponent } from './applogin/applogin.component';
import { AppheaderComponent, AppfooterComponent, AppmenuComponent } from
  './index';
import { NewComponent } from "app/new/new.component";
import { TimesheetComponent } from './timesheet/timesheet.component';
import { TickettoolingComponent } from './tickettooling/tickettooling.component';
import { ProjectmanagementComponent } from './projectmanagement/projectmanagement.component';
import { ELearningComponent } from './e-learning/e-learning.component';
import { DailytimesheetComponent } from './dailytimesheet/dailytimesheet.component';
import { SystemAdminToolComponent } from './systemadmintool/systemadmintool.component';
import { HroperationsComponent } from './hroperations/hroperations.component';
import { PopupModule } from 'ng2-opd-popup';
import { AuthenticationService } from './services/authentication.service';
import { NewprojectComponent } from './newproject/newproject.component';
import {NewProjectService} from './newproject/newproject.service';
import { ProjecthomeComponent } from './projecthome/projecthome.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TasksComponent } from './tasks/tasks.component';
import { ResourceComponent } from './resource/resource.component';
import { ProjectStatsComponent } from './projectstats/projectstats.component';
import { ProdashboardComponent } from './prodashboard/prodashboard.component';
import { TaskstatusComponent } from './taskstatus/taskstatus.component'
 //import {DataTableModule} from "angular2-datatable";
// import { DataTablesModule } from 'angular-datatables';
// import { DataTableModule } from "ng2-data-table";
// import {DataFilterPipe} from './datatable-filter';
// import {  FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { AdashComponent } from './adash/adash.component';

import {DataFilterPipe} from './datatables.pipe';
import {DataTableModule} from "angular2-datatable";
import { MyDatePickerModule } from 'mydatepicker';


@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    DataFilterPipe,
    ApploginComponent,
    NewComponent,
    TimesheetComponent,
    TickettoolingComponent,
 
    ProjectmanagementComponent,
    ELearningComponent,
    DailytimesheetComponent,
    SystemAdminToolComponent,
    HroperationsComponent,
    NewprojectComponent,
    ProjecthomeComponent,
    TimelineComponent,
    TasksComponent,
    ResourceComponent,
    ProjectStatsComponent,
    ProdashboardComponent,
    TaskstatusComponent,
    AdashComponent

// DataFilterPipe

  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    DatePickerModule,
    PopupModule.forRoot(),
    DataTableModule,
     MyDatePickerModule
  ],

  providers: [
    AuthenticationService,
      NewProjectService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
