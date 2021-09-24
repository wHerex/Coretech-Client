import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CalendarDateFormatter, CalendarEvent, CalendarEventAction, CalendarView, DAYS_OF_WEEK} from 'angular-calendar';
import {Observable, of} from 'rxjs';
import {EventsCalendarDateFormatter} from './date-formatter/events-calendar-date-formatter';

interface DayClicked {
  date: Date;
  events: CalendarEvent[];
}

@Component({
  templateUrl: 'events.component.html',
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: EventsCalendarDateFormatter
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsComponent implements OnInit {

  private actions: CalendarEventAction[] = [
    {
      label: '<label class="margin-333">Edit</label>',
      a11yLabel: 'Edit',
      onClick: ({event}: { event: CalendarEvent }) => {
        this.editEvent(event);
      },
    },
    {
      label: '<label>Del</label>',
      a11yLabel: 'Delete',
      onClick: ({event}: { event: CalendarEvent }) => {
        this.deleteEvent(event);
      },
    }
  ];

  viewDate = new Date();

  calendarView = CalendarView.Day;

  CalendarView = CalendarView;

  isActiveDayOpen = false;

  locale = 'pl-PL';

  weekStartDay = DAYS_OF_WEEK.MONDAY;

  hourSegments = 2;

  events$: Observable<CalendarEvent[]>;

  constructor() {
  }

  ngOnInit() {
    this.events$ = of([]);
  }

  onDayClick({date, events}: DayClicked) {
    this.viewDate = date;
  }

  deleteEvent(event: CalendarEvent<any>) {

  }

  editEvent(event: CalendarEvent<any>) {

  }

  addStylesIfDayView() {
    return {'day-view': this.calendarView === this.CalendarView.Day};
  }

  viewDetails(calendarEvent: CalendarEvent, mouseEvent?: MouseEvent) {

  }

}
