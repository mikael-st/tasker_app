import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LoginPage } from './screens/login-page/login-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['../styles.scss','./app.component.scss']
})
export class AppComponent {}