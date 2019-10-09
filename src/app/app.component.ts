import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand'>{{pageTitle}}</a>
    <ul class='nav nav-pills'>
        <li><a class='nav-link' [routerLink]="['/welcomepage']">Home</a></li>
        <li><a class='nav-link' [routerLink]="['/menItems']">Men</a></li>
        <li><a class='nav-link' [routerLink]="['/womenItems']">Women</a></li>
        <li><a class='nav-link' [routerLink]="['/childrenItems']">Children</a></li>
    </ul>
    </nav>
    <div class='container'>
    <router-outlet></router-outlet>
    </div>
  `
  
  
})
export class AppComponent {
  pageTitle = 'ApnaStore';
}
