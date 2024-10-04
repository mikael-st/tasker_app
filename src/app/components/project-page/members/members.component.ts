import { Component } from '@angular/core';
import { ProjectMenu } from '../../toolbars/project-menu/project-menu.component';
import { CreateButton } from '../../buttons/create-btn/create-btn.component';
import { SearchComponent } from '../../misc/search/search.component';
import { User } from '../../user/user.component';
import { Badge } from '../../labels/badge/badge.component';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [
    ProjectMenu,
    CreateButton,
    SearchComponent,
    User,
    Badge
  ],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersComponent {
  members = Array.from({ length: 4 }, (_, i) => i);
}
