import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieComponent } from './public/movie/movie.component';
import { MovieDetailsComponent } from './public/movie/movie-details.component';
import { CastDetailsComponent } from './public/cast/cast-details.component';
import { GenreComponent } from './public/genre/genre.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CastComponent } from './public/cast/cast.component';
import { AddGenreComponent } from './public/genre/add-genre.component';
import { JwtAdderInterceptor } from './core/Interceptors/jwt-adder.interceptor';
import { AuthGuard } from './core/Guards/auth.guard';
import { AdminGuard } from './core/Guards/admin.guard';


// tells angular which routing file to use, services to inject, classes to import
@NgModule({
  declarations: [ // componenets should be declared here 
    AppComponent, MovieComponent, MovieDetailsComponent, CastDetailsComponent, GenreComponent, CastComponent, AddGenreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:JwtAdderInterceptor, multi:true} // tells it provides multiple values to single request (multiple possible returns in jwtAdderInterceptor)
    ,AuthGuard,AdminGuard
],
  bootstrap: [AppComponent]
})
export class AppModule { }
