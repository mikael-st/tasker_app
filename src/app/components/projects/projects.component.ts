import { Component } from '@angular/core';
import { CreateButton } from '../buttons/create-btn/create-btn.component';
import { SearchComponent } from '../misc/search/search.component';
import { Avatar } from '../misc/avatar/avatar.component';
import { Team } from '../team/team.component';
import { ProgressLabel } from '../misc/progress-label/progress-label.component';
import { ScrollerComponent } from '../misc/scroller/scroller.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronDoubleLeftMini, heroChevronDoubleRightMini } from '@ng-icons/heroicons/mini';
import { Router } from '@angular/router';
import { User } from '../user/user.component';
import { Badge } from "../labels/badge/badge.component";

@Component({
  selector: 'projects',
  standalone: true,
  imports: [
    CreateButton,
    SearchComponent,
    User,
    Team,
    ProgressLabel,
    ScrollerComponent,
    NgIconComponent,
    Badge
],
  providers: [
    provideIcons({
      heroChevronDoubleLeftMini,
      heroChevronDoubleRightMini
    })
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class Projects {
  constructor (private router: Router) {}
  
  first: number = 0;
  pages: number = 10;

  rows = Array.from({ length: 12 }, (_, i) => i);


  openProject() {
    this.router.navigate(['/home/project']);
  }
}
