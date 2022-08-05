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

// tells angular which routing file to use, services to inject, classes to import
@NgModule({
  declarations: [ // componenets should be declared here 
    AppComponent, MovieComponent, MovieDetailsComponent, CastDetailsComponent, GenreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }