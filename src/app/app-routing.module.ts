import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login.component';
import { CastDetailsComponent } from './public/cast/cast-details.component';
import { CastComponent } from './public/cast/cast.component';
import { AddGenreComponent } from './public/genre/add-genre.component';
import { GenreComponent } from './public/genre/genre.component';
import { MovieDetailsComponent } from './public/movie/movie-details.component';
import { MovieComponent } from './public/movie/movie.component';
import { AuthGuard } from './core/Guards/auth.guard';
import { AdminGuard } from './core/Guards/admin.guard';

// base routing model for entire application
const routes: Routes = [
  {path:"",component:MovieComponent},
  {path:"Genre/:genreId",component:GenreComponent},
  {path:"Add-Genre",component:AddGenreComponent},
  {path:"Login",component:LoginComponent},
  {path:"Cast",component:CastComponent},
  {path:"Movie-Details/:movieId", component:MovieDetailsComponent},
  {path:"Cast-Details/:castId",component:CastDetailsComponent}, // above are loaded automatically
  {path:"Account",loadChildren: () => import("./account/account.module").then(mod=>mod.AccountModule)}, // below need authentication
  {path:"Admin",loadChildren: () => import("./admin/admin.module").then(mod=>mod.AdminModule), canActivateChild:[AdminGuard]},
  {path:"User",loadChildren: () => import("./user/user.module").then(mod=>mod.UserModule), canActivateChild:[AuthGuard]}
];
// route-guard: interface + used to controll accessibility of routes
@NgModule({ // decorator that set class as module
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
