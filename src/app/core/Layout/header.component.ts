import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/shared/models/Genre';
import { User } from 'src/app/shared/models/User';
import { AccountService } from '../services/account.service';
import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;
  currentUser: User;
  genres!: Genre[];
  constructor(private accountService:AccountService, private genreService:GenreService) { }

  ngOnInit(): void {
    this.accountService.isLoggedIn.subscribe(data=>{
      this.isLoggedIn = data;
    });
    this.accountService.currentUser.subscribe(data=>{
      this.currentUser = data;
    })
    this.genreService.getAllGenres().subscribe(g=>{
      this.genres = g;
      console.log(this.genres);
    })
  }

  logout(){
    this.accountService.logoutUser();
  }

}
