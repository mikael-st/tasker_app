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

  get days() {
    const d = Interval.fromDateTimes(
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
    return d;
  }
  
  get month() {
    const name = this.firstDay.monthLong as string
    return name[0].toUpperCase() + name.substring(1).toLowerCase();
  }

  nextMonth() {
    this.firstDay = this.firstDay.plus({ month: 1 });
  }

  prevMonth() {
    this.firstDay = this.firstDay.minus({ month: 1 });
  }
}
