import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LoginPage } from './screens/login-page/login-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginPage,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['../styles.scss','./app.component.scss']
})
export class AppComponent /* implements OnInit */ {
  /* scale: number = 1;
   [style.transform]="'scale('+ scale +')'"
  ngOnInit() {
    this.updateScale();
  }

  private updateScale() {
    const base = 1920;
    this.scale = window.innerWidth / base;
  } */
}