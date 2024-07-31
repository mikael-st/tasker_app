import { Component } from '@angular/core';
import { TextFieldComponent } from '../text-field/text-field.component';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroUserSolid } from '@ng-icons/heroicons/solid';

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

}
