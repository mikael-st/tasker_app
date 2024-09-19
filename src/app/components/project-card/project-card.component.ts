import { Component } from '@angular/core';
import { ProgressLabel } from '../labels/progress-label/progress-label.component';
import { DateLabel } from '../labels/date-label/date-label.component';

@Component({
  selector: 'project-card',
  standalone: true,
  imports: [
    ProgressLabel,
    DateLabel
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCard {

}
