import { Injectable } from '@angular/core';    
import {HttpClient} from '@angular/common/http';    
//import {Observable} from 'rxjs';    

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:44374/api";  
  constructor(private http: HttpClient) { }

  RegisterUser(val: any) {  
    debugger;
    return this.http.post(this.APIUrl + '/Authenticate/Register', val);  
  }



}
