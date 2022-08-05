import { Component } from '@angular/core';

// base componenet, we can think of it as homepage
@Component({ // decorators (attributes)
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieShopSPA';
}
