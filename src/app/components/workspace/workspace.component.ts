import { Component } from '@angular/core';
import { ProjectCard } from '../project-card/project-card.component';
import { ProgressLabel } from '../labels/progress-label/progress-label.component';

@Component({
  selector: 'workspace',
  standalone: true,
  imports: [
    ProjectCard,
  ],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss'
})
export class Workspace {

}
