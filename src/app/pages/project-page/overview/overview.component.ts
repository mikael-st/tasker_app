import { Component, Input } from '@angular/core';
import { User } from '../../../components/user/user.component';
import { DateLabel } from '../../../components/labels/date-label/date-label.component';
import { CircularProgressBar } from '../../../components/misc/c-progress-bar/c-progress-bar.component';
import { TaskCard } from '../../../components/cards/task-card/task-card.component';
import { MessageCard } from '../../../components/cards/message/message.component';
import { ImportantDates } from '../../../components/misc/important-dates/important-dates.component';
import { ProjectMenu } from '../../../components/toolbars/project-menu/project-menu.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    User,
    DateLabel,
    CircularProgressBar,
    TaskCard,
    MessageCard,
    ImportantDates,
    ProjectMenu
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  tasks = Array.from({ length: 12 }, (_, i) => i);
}
