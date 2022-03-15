import { Injectable } from '@angular/core';    
import {HttpClient} from '@angular/common/http';    
//import {Observable} from 'rxjs';    

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private readonly APIUrl = "https://localhost:44374/api";  
  constructor(private http: HttpClient) { }

  RegisterUser(val: any) {  
    return this.http.post(this.APIUrl + '/Authenticate/Register', val);  
  }

  LoginUser(val: any){
    return this.http.post(this.APIUrl + '/Authenticate/Login', val);  
  }

}
