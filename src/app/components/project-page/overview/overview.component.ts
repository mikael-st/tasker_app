import { Component, Input } from '@angular/core';
import { User } from '../../user/user.component';
import { DateLabel } from '../../labels/date-label/date-label.component';
import { CircularProgressBar } from '../../misc/c-progress-bar/c-progress-bar.component';
import { TaskCard } from '../../cards/task-card/task-card.component';
import { MessageCard } from '../../card/message/message.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    User,
    DateLabel,
    CircularProgressBar,
    TaskCard,
    MessageCard
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  tasks = Array.from({ length: 12 }, (_, i) => i);
}
