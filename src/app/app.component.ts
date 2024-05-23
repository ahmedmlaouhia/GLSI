import { Component } from '@angular/core';
import { NavbarService } from './services/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'GLSI';
  showNavbar: boolean = true;

  constructor(private navbarService: NavbarService) {
    this.navbarService.showNavbar$.subscribe(show => {
      this.showNavbar = show;
  });}}