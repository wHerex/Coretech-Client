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
import localePl from '@angular/common/locales/pl';
import {ModalComponent} from './modal/modal-component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

const plLocale = 'pl-PL';

registerLocaleData(localePl);

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
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: plLocale}
  ],
  declarations: [
    EventsComponent,
    ModalComponent
  ]
})
export class EventsModule {
}
