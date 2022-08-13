import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Genre } from 'src/app/shared/models/Genre';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {
  name!:string;
  tnc: boolean = false; // terms and condition
  flag:boolean = false; // check if addition was successful
  genre:Genre = {id:0,name:'',movies:[]}; // whenever hosting data to database, we should never set primary key manually just leave it 0 or undefined
  constructor() { } 


  // compose validators are really useful especially when we create custom validators

  ngOnInit(): void {
  }

  addGenre(genreForm:NgForm){
    this.genre.name = genreForm.value.name;
    console.log(this.genre);
    this.flag=true;
  }
}
