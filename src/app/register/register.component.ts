import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  
  constructor() { }

  getUserData(username, password, confirmPassword){
    console.log(username + " : " + password + " : " + confirmPassword);
  }


  ngOnInit(): void {
  }

}
