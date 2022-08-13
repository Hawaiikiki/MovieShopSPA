import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-cast',
  templateUrl: './create-cast.component.html',
  styleUrls: ['./create-cast.component.css']
})
export class CreateCastComponent implements OnInit {

  flag:boolean = true;
  createCastForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createCastForm = this.fb.group({
      name:['',Validators.required],
      gender:['',Validators.required]
    })
  }

  onSubmit(){
    this.flag=true;
    if(this.createCastForm.valid){
      alert("Cast created Successfully");
      console.table(this.createCastForm.value);
    }
  }

}
