import { Component } from '@angular/core';
import { ProjectCard } from '../cards/project-card/project-card.component';
import { ProgressLabel } from '../misc/progress-label/progress-label.component';
import { ScrollerComponent } from '../misc/scroller/scroller.component';
import { User } from '../user/user.component';
import { TaskCard } from '../cards/task-card/task-card.component';

@Component({
  selector: 'workspace',
  standalone: true,
  imports: [
    ProjectCard,
    ScrollerComponent,
    User,
    TaskCard
  ],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss'
})
export class Workspace {
  projects = Array.from({ length: 10 }, (_, i) => i);
}
