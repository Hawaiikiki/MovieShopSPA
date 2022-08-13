import { Component, OnInit } from '@angular/core';
import { AccountService } from './core/services/account.service';

// base componenet, we can think of it as homepage
@Component({ // decorators (attributes)
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MovieShopSPA';
  constructor(private accountServicee:AccountService){}

  ngOnInit(){
    if(localStorage.getItem('token')!=null){
      this.accountServicee.validateJWT();
    }
  }
}
