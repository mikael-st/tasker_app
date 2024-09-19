import { Component } from '@angular/core';
import { ProjectCard } from '../project-card/project-card.component';
import { ProgressLabel } from '../labels/progress-label/progress-label.component';
import { ScrollerComponent } from '../misc/scroller/scroller.component';

@Component({
  selector: 'workspace',
  standalone: true,
  imports: [
    ProjectCard,
    ScrollerComponent
  ],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss'
})
export class Workspace {

}
