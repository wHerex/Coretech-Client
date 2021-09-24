import { Component } from '@angular/core';
import { Employee } from '../../interfaces/employee';

  const data: Employee[] = [
    {id: 1, username: 'user', password: 'user', role: 'user'}
  ];
@Component({
  templateUrl: 'employees.component.html'
})
export class EmployeesComponent {

  displayedColumns = ["seqNo", "description", "duration"];
  dataSource = data;
  constructor() { }

}
