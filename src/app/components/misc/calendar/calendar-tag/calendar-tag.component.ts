import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroClipboardMini } from '@ng-icons/heroicons/mini';

@Component({
  selector: 'calendar-tag',
  standalone: true,
  imports: [
    NgIconComponent
  ],
  providers: [
    provideIcons({
      heroClipboardMini,
    })
  ],
  templateUrl: './calendar-tag.component.html',
  styleUrl: './calendar-tag.component.scss'
})
export class CalendarTag {

}
