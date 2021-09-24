import {EmployeesComponent} from './employees.component';
import {CommonModule} from '@angular/common';
import {EmployeeRoutingModule} from './employee-routing.module';
import {FormsModule} from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {PopoverModule} from 'ngx-bootstrap/popover';
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {NgModule} from '@angular/core';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    MatTableModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [
    EmployeesComponent
  ]
})
export class EmployeeModule { }
