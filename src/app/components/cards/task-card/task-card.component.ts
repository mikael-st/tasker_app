import { Component } from '@angular/core';
import { DateLabel } from '../../labels/date-label/date-label.component';
import { Avatar } from '../../misc/avatar/avatar.component';

@Component({
  selector: 'task-card',
  standalone: true,
  imports: [
    DateLabel,
    Avatar
  ],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCard {

}
