import { Component } from '@angular/core';
import { CreateProjectButton } from '../buttons/create-project/create-project.component';
import { SearchComponent } from '../misc/search/search.component';
import { Avatar } from '../avatar/avatar.component';
import { Team } from '../team/team.component';
import { ProgressLabel } from '../labels/progress-label/progress-label.component';
import { ScrollerComponent } from '../misc/scroller/scroller.component';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [
    CreateProjectButton,
    SearchComponent,
    Avatar,
    Team,
    ProgressLabel,
    ScrollerComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class Projects {
  rows = Array.from({ length: 3 }, (_, i) => i);
}
