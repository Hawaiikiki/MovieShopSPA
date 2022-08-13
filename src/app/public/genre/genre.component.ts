import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenreService } from 'src/app/core/services/genre.service';
import { PagedResultSet } from 'src/app/shared/models/PagedResultSet';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  genreMovies!: PagedResultSet;
  genreId!: number;
  flag:boolean = false;
  constructor(private genreService:GenreService,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe(params=>{
      this.genreId = params['genreId'];
      console.log(this.genreId);
    })
    this.genreService.getAllMovies(this.genreId).subscribe(m=>{
      this.genreMovies = m;
      console.log(this.genreMovies);
    })

  }

  // mock function to check html
  delteGenre(){
    this.flag = true;
  }
}
