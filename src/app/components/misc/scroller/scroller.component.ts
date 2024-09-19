import { Component, Input } from '@angular/core';
import { Project, projects } from '../../../service/project';
import { ProjectCard } from '../../project-card/project-card.component';

@Component({
  selector: 'scroller',
  standalone: true,
  imports: [
    ProjectCard
  ],
  templateUrl: './scroller.component.html',
  styleUrl: './scroller.component.scss'
})
export class ScrollerComponent {
  // @Input() items: Project[] = projects;
}
