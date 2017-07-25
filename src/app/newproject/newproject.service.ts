import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NewProjectService {
    headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' }); // ... Set content type to JSON
    options = new RequestOptions({ headers: this.headers });
    livePage: any;
    role :any;
    constructor(private http: Http) { }
    getTotalProjects() {
        return this.http.get("http://localhost/myworks/api/getProjects")
            .map((res: Response) => res.json());
    }
    getTotalProjectsadmin(){
    return this.http.get("http://localhost/myworks/api/getdata")
    .map((res:Response) => res.json());
}
    getdates(body: any){
    let bodyString = JSON.stringify(body); // Stringify payload
        console.log(bodyString);
        return this.http.post('http://localhost/myworks/api/getdate', bodyString, this.options) // ...using post request
            .map((res: Response) => res.json());
}
    getTotalProjectdetails(body: any) {
        let bodyString = JSON.stringify(body); // Stringify payload
        console.log(bodyString);
        return this.http.post('http://localhost/myworks/api/getProjectDetails', bodyString, this.options) // ...using post request
            .map((res: Response) => res.json());
    }
    addNewTimeline(body: any) {
        let bodyString = JSON.stringify(body); // Stringify payload
        console.log(bodyString);
        return this.http.post('http://localhost/myworks/api/addtimeline', bodyString, this.options) // ...using post request
            .map((res: Response) => res.json());
    }

    addNewProject(body: any) {
        let bodyString = JSON.stringify(body); // Stringify payload
        console.log(bodyString);
        return this.http.post('http://localhost/myworks/api/addTicket', bodyString, this.options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data    
    }
    addTaskStatus(body: any) {
        let bodyString = JSON.stringify(body); // Stringify payload
        console.log(bodyString);
        return this.http.post('http://localhost/myworks/api/insert_project_status', bodyString, this.options) // ...using post request
            .map((res: Response) => res.json());
    }
    // getProjectNames() {
    //     return this.http.get("http://localhost/myworks/api/getProjectnames")
    //         .map((res: Response) => res.json())
    // }
    getProjectNames(body: any) {
        let bodyString = JSON.stringify(body); // Stringify payload
        console.log(bodyString);
        return this.http.post('http://localhost/myworks/api/getProjectnames', bodyString, this.options) // ...using post request
            .map((res: Response) => res.json());
    }
    getTaskStatus(body: any) {
       let bodyString = JSON.stringify(body); // Stringify payload
        console.log(bodyString);
        return this.http.post('http://localhost/myworks/api/getTaskStatus', bodyString, this.options) // ...using post request
            .map((res: Response) => res.json());
    }
    getEmployees() {
        return this.http.get("http://localhost/myworks/api/getEmp")
            .map((res: Response) => res.json());
    }
    getprojectmanager() {
        return this.http.get("http://localhost/myworks/api/getManagers")
            .map((res: Response) => res.json());
    }
    getTotalPro() {
        return this.http.get("http://localhost/myworks/api/gettotalPro")
            .map((res: Response) => res.json());
    }
    getAssigned(body: any) {
        let bodyString = JSON.stringify(body); // Stringify payload
        console.log(bodyString);
        return this.http.post('http://localhost/myworks/api/getAss_names', bodyString, this.options) // ...using post request
            .map((res: Response) => res.json());
    }
    getFreeCandidates() {
        return this.http.get("http://localhost/myworks/api/getFreeOne")
            .map((res: Response) => res.json());
    }
    allocateProject(body: any) {
        let bodyString = JSON.stringify(body); // Stringify payload
        console.log(bodyString);
        return this.http.post('http://localhost/myworks/api/allocateProject', bodyString, this.options) // ...using post request
            .map((res: Response) => res.json());
    }
    deallocateProject(body: any) {
        let bodyString = JSON.stringify(body); // Stringify payload
        console.log(bodyString);
        return this.http.post('http://localhost/myworks/api/deallocateProject', bodyString, this.options) // ...using post request
            .map((res: Response) => res.json());
    }
    getManPro(body: any) {
        let bodyString = JSON.stringify(body); // Stringify payload
        console.log(bodyString);
        return this.http.post('http://localhost/myworks/api/getManPro', bodyString, this.options) // ...using post request
            .map((res: Response) => 
                res.json())
    }
    getMemPro(body: any) {
        let bodyString = JSON.stringify(body); // Stringify payload
        console.log(bodyString);
        return this.http.post('http://localhost/myworks/api/getMemPro', bodyString, this.options) // ...using post request
            .map((res: Response) => res.json());
    }
    getTaskStat(body: any) {
        let bodyString = JSON.stringify(body); // Stringify payload
        console.log(bodyString);
        return this.http.post('http://localhost/myworks/api/getstattask', bodyString, this.options) // ...using post request
            .map((res: Response) => res.json());
    }
    getTaskStatin(body: any) {
        let bodyString = JSON.stringify(body); // Stringify payload
        console.log(bodyString);
        return this.http.post('http://localhost/myworks/api/getstattaskin', bodyString, this.options) // ...using post request
            .map((res: Response) => res.json());
    }
    // getNames() {
    //     return this.http.get("http://localhost/myworks/api/getNames")
    //         .map((res: Response) => res.json())
    // }
    getNames(body: any) {
       let bodyString = JSON.stringify(body); // Stringify payload
        console.log(bodyString);
        return this.http.post('http://localhost/myworks/api/getNames', bodyString, this.options) // ...using post request
            .map((res: Response) => res.json());
    }
    getStatProName(body: any) {
        let bodyString = JSON.stringify(body); // Stringify payload
        console.log(bodyString);
        return this.http.post('http://localhost/myworks/api/statproName', bodyString, this.options) // ...using post request
            .map((res: Response) => res.json());
    }
    addStat(body: any) {
        let bodyString = JSON.stringify(body); // Stringify payload
        console.log(bodyString);
        return this.http.post('http://localhost/myworks/api/addStat', bodyString, this.options) // ...using post request
            .map((res: Response) => res.json());
    }
    editTask(body : any){
        let bodyString = JSON.stringify(body); // Stringify payload
        console.log(bodyString);
        return this.http.post('http://localhost/myworks/api/editTask', bodyString, this.options) // ...using post request
            .map((res: Response) => res.json());
    }
    getInProgresscount(){
        return this.http.get("http://localhost/myworks/api/inprogressCount")
            .map((res: Response) => res.json());
    }
   getClosedcount(){
        return this.http.get("http://localhost/myworks/api/closedCount")
            .map((res: Response) => res.json());
   }
}
