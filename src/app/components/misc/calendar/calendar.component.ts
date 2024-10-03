import { CommonModule } from '@angular/common';
import { Component, Inject, Input, signal, Signal } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronLeftMini, heroChevronRightMini } from '@ng-icons/heroicons/mini';
import { DateTime, Info, Interval } from 'luxon';

@Component({
  selector: 'calendar',
  standalone: true,
  imports: [
    NgIconComponent,
    CommonModule
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
  @Input() class: string = '';

  private today: DateTime = DateTime.local();

  weekdays: string[] = Info.weekdays('short').map(
    (weekday) => weekday[0].toUpperCase() + weekday.substring(1).toLowerCase().replace('.', '')
  );

  firstDay: DateTime = this.today.startOf('month');
  
  print() {
    console.log(this.today.weekday);
    console.log('first day: ');
    console.log(this.firstDay);
    console.log('days: ');
    console.log(this.days);
  }

  days = Interval.fromDateTimes(
    this.firstDay.startOf('week'),
    this.firstDay.endOf('month').endOf('week')
  ).splitBy({ day: 1 }).map(
    (day) => {
      if (day.start === null) {
        throw new Error('Wrong dates')
      }
      return day.start;
    } 
  );
  
  get month() {
    const name = this.firstDay.monthLong as string
    return name[0].toUpperCase() + name.substring(1).toLowerCase();
  }
}
