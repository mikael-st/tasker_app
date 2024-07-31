import { Component, Input } from '@angular/core';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroKeySolid, heroUserSolid } from '@ng-icons/heroicons/solid';
import { heroEyeSlashMini } from '@ng-icons/heroicons/mini'

@Component({
  selector: 'form-input',
  standalone: true,
  imports: [
    NgIconComponent,
    TextFieldComponent
  ],
  providers: [provideIcons({ heroUserSolid, heroKeySolid, heroEyeSlashMini })],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss'
})
export class TextFieldComponent {
  @Input() placeholder: string = '';
  @Input() icon: string = '';
}
