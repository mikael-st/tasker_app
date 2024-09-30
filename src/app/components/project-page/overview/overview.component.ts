import { Component } from '@angular/core';
import { User } from '../../user/user.component';
import { DateLabel } from '../../labels/date-label/date-label.component';
import { CircularProgressBar } from '../../misc/c-progress-bar/c-progress-bar.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    User,
    DateLabel,
    CircularProgressBar
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
