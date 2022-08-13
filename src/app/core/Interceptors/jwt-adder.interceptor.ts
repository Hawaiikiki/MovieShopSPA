import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, scheduled } from 'rxjs';
import { AccountService } from '../services/account.service';

@Injectable()
export class JwtAdderInterceptor implements HttpInterceptor { // modify any HttpRequest
  // used for authentication (token bearer authentication), checking incoming HttpRequest, adding loading bar
  // convert responses of different types 

  isLoggedIn: boolean = false;
  jwtToken!: string; // http request may not have any token
  constructor(private accountService: AccountService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.accountService.isLoggedIn.subscribe(data => {
      this.isLoggedIn = data;
    });
    if (this.isLoggedIn) {
      this.jwtToken = localStorage.getItem('token')!; // give null value if no token
      if (this.jwtToken != null) {
        return next.handle(request.clone({ setHeaders: { Authorization: 'Bearer'+''+this.jwtToken } })); // this way we can stay authenticated in API
      }
    }
    return next.handle(request);
  }
}
