import { Routes, RouterModule } from '@angular/router';

import { AppheaderComponent, AppfooterComponent, AppmenuComponent } from
    './index';
// import { AppregisterComponent } from './appregister/appregister.component';
import { ApploginComponent } from './applogin/applogin.component';
import { AppComponent } from "app/app.component";
import { NewComponent } from "app/new/new.component";
import { TimesheetComponent } from './timesheet/timesheet.component';
import { TickettoolingComponent } from './tickettooling/tickettooling.component';
import { ProjectmanagementComponent } from './projectmanagement/projectmanagement.component';
import { ELearningComponent } from './e-learning/e-learning.component';
import { DailytimesheetComponent } from './dailytimesheet/dailytimesheet.component';
import { SystemAdminToolComponent } from './systemadmintool/systemadmintool.component';
import { HroperationsComponent } from './hroperations/hroperations.component';
import { NewprojectComponent } from './newproject/newproject.component';
import { ProjecthomeComponent } from './projecthome/projecthome.component'
import { TasksComponent } from './tasks/tasks.component'
import { ResourceComponent } from './resource/resource.component'
import { ProjectStatsComponent } from './projectstats/projectstats.component';
import { ProdashboardComponent } from './prodashboard/prodashboard.component'
import { TaskstatusComponent } from './taskstatus/taskstatus.component'
import {AdashComponent} from './adash/adash.component';

const appRoutes: Routes = [
    // { path: 'register', component: AppregisterComponent },
    { path: 'new', component: NewComponent },
    { path: 'timesheet', component: TimesheetComponent },
    { path: 'tickettooling', component: TickettoolingComponent },
 
    { path: 'projectmanagement/:livePage', component: ProjectmanagementComponent },
    { path: 'e-learning', component: ELearningComponent },
    { path: 'dailytimesheet', component: DailytimesheetComponent },
    { path: 'systemadmintool', component: SystemAdminToolComponent },
    { path: 'hroperations', component: HroperationsComponent },
    
    { path: 'newproject', component: NewprojectComponent },
    {path: 'adash',component:AdashComponent},
    { path: 'tasks', component: TasksComponent },
    { path: 'ResourceComponent', component: ResourceComponent },
    { path: 'ProdashboardComponent', component: ProdashboardComponent },
    { path: 'projectstats', component: ProjectStatsComponent },
    { path: 'tstatus', component: TaskstatusComponent },
    // otherwise redirect to home
    { path: 'projecthome', component: ProjecthomeComponent },
    { path: '', component: ApploginComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);