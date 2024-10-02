import { Component, Inject } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronLeftMini, heroChevronRightMini } from '@ng-icons/heroicons/mini';

@Component({
  selector: 'calendar',
  standalone: true,
  imports: [
    NgIconComponent
  ],
  providers: [
    provideIcons({
      heroChevronLeftMini,
      heroChevronRightMini
    })
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class Calendar {
  private today = new Date();

  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  weekdays = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ]

  days = this.getDays(this.year, this.today.getMonth());

  getDays(year: number, month: number ): { weekday: string, days: number[] }[] {
    const days: { weekday: string, days: number[] }[] = [];
    const total = new Date(year, month, 0).getDate();

    for (let index = 0; index < this.weekdays.length; index++) {
      const ds = [];
      
      for (let day = 1; day <= total; day++) {
        const date = new Date(this.year, this.today.getMonth(), day);

        if (date.getDay() === index) {
          ds.push(day);
        }
      }
      days.push({
        weekday: this.weekdays[index],
        days: ds
      });
    }
    // console.log(days);
    return days;
  }

  get month(): string {
    return this.months[this.today.getMonth()];
  }

  get year(): number {
    return this.today.getFullYear();
  }
}
