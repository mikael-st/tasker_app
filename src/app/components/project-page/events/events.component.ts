import { Component } from '@angular/core';
import { ProjectMenu } from '../../toolbars/project-menu/project-menu.component';
import { CreateButton } from '../../buttons/create-btn/create-btn.component';
import { Calendar } from '../../misc/calendar/calendar.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    ProjectMenu,
    CreateButton,
    Calendar
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class Events {

}
