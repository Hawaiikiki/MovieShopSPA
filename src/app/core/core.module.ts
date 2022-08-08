import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Layout/header.component';
import { FooterComponent } from './Layout/footer.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule // need to add it to make links in html
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
