import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { LoginDTO } from 'src/app/login/LoginDTO';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private shared: SharedService) { }

  loginForm:FormGroup=new FormGroup({
    userName:new FormControl(''),
    password:new FormControl(''),
  })

  ngOnInit(): void {
  }

  getUserDataForLogin(){
    let data = this.loginForm.value as LoginDTO;
    console.log(data);
    this.shared.LoginUser(data).subscribe(res => {
      if(res){
        console.log(res);
      }
    });

  }






}
