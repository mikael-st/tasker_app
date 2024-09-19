import { Component } from '@angular/core';
import { TextFieldComponent } from '../text-field/text-field.component';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroUserSolid } from '@ng-icons/heroicons/solid';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [
    NgIconComponent,
    TextFieldComponent
  ],
  providers: [provideIcons({ heroUserSolid })],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  constructor (private router: Router) {}

  login() {
    console.log('HI');
    
    this.router.navigate(['/home/workspace']);
  }
}
