import { Component, Input } from '@angular/core';
import { ProgressLabel } from '../../misc/progress-label/progress-label.component';
import { DateLabel } from '../../labels/date-label/date-label.component';
import { Team } from '../../team/team.component';
import { Project } from '../../../service/project';
import { Router } from '@angular/router';

@Component({
  selector: 'project-card',
  standalone: true,
  imports: [
    ProgressLabel,
    DateLabel,
    Team,
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCard {
  constructor (private router: Router) {}
  
  @Input() data: Project = {
    title: 'projeto',
    description: 'projeto teste'
  };

  openProject() {
    console.log('clicado');
    
    this.router.navigate(['/home/project']);
  }
}
