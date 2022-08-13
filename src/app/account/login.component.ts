import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../core/services/account.service';
import { UserLogin } from '../shared/models/UserLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  flag:boolean = false;
  user:UserLogin = {email:'', password:''};
  constructor(private loginService:AccountService, private _router:Router) { }

  ngOnInit(): void {
  }
  loginUser(userLoginForm:NgForm){
    this.user.password = userLoginForm.value.password;
    this.user.email = userLoginForm.value.email;
    console.log(this.user);
    this.flag=true;

    this.loginService.loginUser(this.user).subscribe(data=>{
      if(data){
        this.flag=true;
        setTimeout(()=>{
          this._router.navigateByUrl('/');
        },10000);//10000 milli seconds
      }
      else{
        this.flag=false;
      }
    });
  }

}
