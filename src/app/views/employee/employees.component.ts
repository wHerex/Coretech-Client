import {Component, OnInit} from '@angular/core';
import {Employee} from '../../interfaces/employee';
import {EmployeeService} from './employee.service';

const data: Employee[] = [
  {id: 1, username: 'user', password: 'user', role: 'user'}
];

@Component({
  templateUrl: 'employees.component.html'
})
export class EmployeesComponent implements OnInit {

  displayedColumns = ['seqNo', 'description', 'duration', 'actions'];
  dataSource = data;
  employeeService: EmployeeService;
  employees: Employee[];
  constructor(employeeService: EmployeeService) {
  }

  ngOnInit() {
/*    this.employeeService.findEmployees().subscribe(
      e => this.employees = e
    );*/
  }


}
