import { Component } from '@angular/core';

@Component({
  selector: 'badge',
  standalone: true,
  imports: [],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class Badge {
  content: string = '+n';
}
