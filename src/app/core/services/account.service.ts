import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { UserLogin } from 'src/app/shared/models/UserLogin';
import { UserRegister } from 'src/app/shared/models/UserRegister';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from 'src/app/shared/models/User';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private currentUserSubject = new BehaviorSubject<User>({} as User); // we want to follow below pattern when implementing user authentication
  public currentUser = this.currentUserSubject.asObservable();

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn = this.isLoggedInSubject.asObservable();

  jwtHelper = new JwtHelperService();

  constructor(private http:HttpClient) { }
  // registerUser(userRegister:UserRegister):Observable<UserRegister>{
  //   return this.http.post<UserRegister>("https://localhost:7076/api/Account/register");
  // }

  loginUser(userLogin:UserLogin):Observable<boolean>{
    return this.http.post("https://localhost:7076/api/Account/login",userLogin).pipe(map((response:any)=>{
      if(response){
        localStorage.setItem('token',response.token); //storing jwt token in user's local storage
        this.populateUserInfoFromToken();
        return true;
      }
      return false;
    }));
  }

  logoutUser(){
    localStorage.removeItem('token');
    this.currentUserSubject.next({} as User);
    this.isLoggedInSubject.next(false);
  }

  register(userRegister:UserRegister):Observable<boolean>{
    return this.http.post<boolean>("https://localhost:7076/api/Account/register",userRegister);
  }

  populateUserInfoFromToken(){
    var tokenValue = localStorage.getItem('token');

    if(tokenValue && !this.jwtHelper.isTokenExpired(tokenValue)){
      const decodedToken = this.jwtHelper.decodeToken(tokenValue);
      console.log(decodedToken.isAdmin);
      this.currentUserSubject.next(decodedToken); // pass the next value to subject
      this.isLoggedInSubject.next(true);
    }
  }

  validateJWT(){
    var tokenValue = localStorage.getItem('token');
    if(tokenValue!=null){
      const decodedToken = this.jwtHelper.decodeToken(tokenValue);
      this.isLoggedInSubject.next(true);
      this.currentUserSubject.next(decodedToken);
    }
  }
}
