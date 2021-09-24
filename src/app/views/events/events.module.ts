import {EventsComponent} from './events.component';
import {CommonModule, registerLocaleData} from '@angular/common';
import {EventsRoutingModule} from './events-routing.module';
import {FormsModule} from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {PopoverModule} from 'ngx-bootstrap/popover';
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {LOCALE_ID, NgModule} from '@angular/core';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {plLocale} from 'ngx-bootstrap/chronos';

registerLocaleData('pl-P', 'pl');

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
  ],
  providers: [
    {provide: LOCALE_ID, useValue: plLocale}
  ],
  declarations: [
    EventsComponent
  ]
})
export class EventsModule {
}
