import { Component } from '@angular/core';
import { CreateProjectButton } from '../buttons/create-project/create-project.component';
import { SearchComponent } from '../misc/search/search.component';
import { Avatar } from '../avatar/avatar.component';
import { Team } from '../team/team.component';
import { ProgressLabel } from '../labels/progress-label/progress-label.component';
import { ScrollerComponent } from '../misc/scroller/scroller.component';
import { PaginatorModule } from "primeng/paginator";
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronDoubleLeftMini, heroChevronDoubleRightMini } from '@ng-icons/heroicons/mini';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [
    CreateProjectButton,
    SearchComponent,
    Avatar,
    Team,
    ProgressLabel,
    ScrollerComponent,
    PaginatorModule,
    NgIconComponent
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
  first: number = 0;
  pages: number = 10;

  rows = Array.from({ length: 6 }, (_, i) => i);
}
