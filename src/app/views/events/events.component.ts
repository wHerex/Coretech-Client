import {ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CalendarDateFormatter, CalendarEvent, CalendarEventAction, CalendarView, DAYS_OF_WEEK} from 'angular-calendar';
import {Observable, of} from 'rxjs';
import {EventsCalendarDateFormatter} from './date-formatter/events-calendar-date-formatter';
import {isSameMonth} from 'ngx-bootstrap/chronos';
import {isSameDay} from 'ngx-bootstrap/chronos';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {addDays, addHours, endOfMonth, startOfDay, subDays} from 'date-fns';

interface DayClicked {
  date: Date;
  events: CalendarEvent[];
}

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  templateUrl: 'events.component.html',
  styleUrls: ['events.component.css'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: EventsCalendarDateFormatter
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsComponent implements OnInit {

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;



  modalData: {
    action: string;
    event: CalendarEvent;
  };

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

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors.red,
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: colors.yellow,
      actions: this.actions,
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: colors.blue,
      allDay: true,
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(new Date(), 2),
      title: 'A draggable and resizable event',
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
  ];


  viewDate = new Date();

  calendarView = CalendarView.Month;

  CalendarView = CalendarView;

  isActiveDayOpen = false;

  locale = 'pl';

  weekStartDay = DAYS_OF_WEEK.MONDAY;

  hourSegments = 2;

  events$: Observable<CalendarEvent[]>;

  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal) {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
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
