import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { UserDTO } from 'src/app/register/UserDTO';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  ngOnInit(): void {
  }


  constructor(private shared: SharedService) { }

  
  myForm:FormGroup=new FormGroup({
    userName:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
  })

  getUserData(){

		let data =this.myForm.value as UserDTO
		console.log(data);
    this.shared.RegisterUser(data).subscribe(res => {
      if(res){
        console.log(res);
      }
    });
	}


  

}


//1 bazme bhutto mainn yeehiiiiii gaungunana 2x
//2.a chAL RE KAAMPAIN MERII Tuu TAANNG JANA
//2.b x(kaampain taangiiin yehi h farmanaaaa)  yeh chawal h