import { Component } from '@angular/core';
import { Avatar } from '../avatar/avatar.component';

@Component({
  selector: 'user',
  standalone: true,
  imports: [
    Avatar
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class User {}
