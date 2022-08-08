import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  submitted:boolean = false;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
      confirmPassword:['',Validators.required],
      dateOfBirth:['',Validators.required]
    });
  }

  getRegisterFromControl(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted=true;
    if (this.registerForm.valid){
      alert("Form Submitted Successfully!\n Check the values in the browser conosle");
      console.table(this.registerForm.value);
    }
  }

}
