import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroCalendarSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'date-label',
  standalone: true,
  imports: [
    NgIconComponent
  ],
  providers: [
    provideIcons({
      heroCalendarSolid
    })
  ],
  templateUrl: './date-label.component.html',
  styleUrl: './date-label.component.scss'
})
export class DateLabel {

}
