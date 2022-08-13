import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {
  flag:boolean = true;
  createMovieForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createMovieForm = this.fb.group({
      title:['',Validators.required],
      posterUrl:['',Validators.required]
    })
  }

  onSubmit(){
    this.flag=true;
    if(this.createMovieForm.valid){
      alert("Movie created Successfully");
      console.table(this.createMovieForm.value);
    }
  }

}
