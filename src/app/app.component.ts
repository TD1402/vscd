import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(
    private router: Router
  ) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
