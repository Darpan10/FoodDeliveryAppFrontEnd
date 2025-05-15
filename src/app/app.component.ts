import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentRoute: string = '';
  title = 'OnlineFood';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Set the current route when component loads
    this.currentRoute = this.router.url;

    // Listen for route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.urlAfterRedirects;
        console.log('Current Route:', this.currentRoute); // <-- Check what it prints
      });
  }




}
