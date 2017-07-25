import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from '../app.settings';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    exampledata: any;
    data = [];
    details: any;
    public userLoggedIn = false;
    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

    login( username:string, password:string ) {
        return this.http.post("http://localhost/myworks/api/login", JSON.stringify(
                {
                    username: username, password: password
                }
        ), this.options)
            .map((response: Response) => {
                const data = response.json();
                console.log(data);
                if (data.success) {
                    if (data && data.token) {
                        console.log("here");
                        console.log(data.data);
                        sessionStorage.setItem('currentUser', data.token);
                        sessionStorage.setItem('user_id', data.data.user_id);
                        sessionStorage.setItem('role', data.data.role);
                        sessionStorage.setItem('name', data.data.name);
                        sessionStorage.setItem('username', data.data.username);

                        sessionStorage.setItem('project', data.data.involved_project);
                        sessionStorage.setItem('project id', data.data.involved_project_id);


                        sessionStorage.setItem('name', data.data.name);
                        this.userLoggedIn = true;
                        console.log(sessionStorage);
                    }
                }
                return data;
            });
    }

    logout() {
        sessionStorage.removeItem('currentUser');
    }

    // register(username: string, password: string, reg_no: string, email: string, mobile: string, user_type: string) {
    //     const headers = new Headers({ 'Content-Type': 'application/json' });
    //     const options = new RequestOptions({ headers: headers });

    //     return this.http.post(
    //         AppSettings.registerApi,
    //         JSON.stringify(
    //             {
    //                 username: username, password: password,
    //                 reg_no: reg_no, email: email, mobile: mobile, user_type: user_type
    //             }
    //         ), options)
    //         .map((response: Response) => {
    //             const data = response.json();
    //             return data;
    //         });
    // }

}
