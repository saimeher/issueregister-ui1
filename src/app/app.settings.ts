import { environment } from '../environments/environment';

export class AppSettings {

    

    // LOCALSERVER
    //  public static loginApi: string = 'http://192.168.0.117:8000/api/login';
    // book reserve component
    // public static myBooksApi: string = 'http://192.168.0.117:8000/api/search_books';
    // public static reserveBooksApi: string = 'http://192.168.0.117:8000/api/reserveuserbook';
    // public static dashboarduserApi: string = 'http://192.168.0.117:8000/api/user_dashboard';
    // public static bookissuedApi: string = 'http://192.168.0.117:8000/api/my_books';
    // public static reservebookApi: string = 'http://192.168.0.117:8000/api/newbook';
    // public static bookdeleteApi: string = 'http://192.168.0.117:8000/api/cancel_reservation';
    public static leaveapplyApi:string = 'http://192.168.0.129/angular_mvc/Eportal/eportaldar/Api/leaveapply';
    public static getleaveApi:string = 'http://192.168.0.129/angular_mvc/Eportal/eportaldar/Api/leavestatus';
     public static leaveuserApi:string = 'http://192.168.0.129/angular_mvc/Eportal/eportaldar/Api/leavestatususer';
    public static acceptleavetmApi:string = 'http://192.168.0.129/angular_mvc/Eportal/eportaldar/Api/leaveaccepttm';
    public static rejectleavetmApi:string = 'http://192.168.0.129/angular_mvc/Eportal/eportaldar/Api/leaverejecttm';
    public static acceptleavehrApi:string = 'http://192.168.0.129/angular_mvc/Eportal/eportaldar/Api/leaveaccepthr';
    public static rejectleavehrApi:string = 'http://192.168.0.129/angular_mvc/Eportal/eportaldar/Api/leaverejecthr';
    public static acceptleaveApi:string = 'http://192.168.0.129/angular_mvc/Eportal/eportaldar/Api/leaveaccept';
    public static deleteleaveApi:string = 'http://192.168.0.129/angular_mvc/Eportal/eportaldar/Api/deleteleave';
    public static loginApi:string = 'http://192.168.0.129/angular_mvc/Eportal/eportaldar/Api/login';


    // roles
    // public static roles = {
    //     dashboard: ['admin', 'user'],
    //     issuebooks: ['admin']          // confirm bookings
    // };
}


