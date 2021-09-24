import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Employee} from '../../interfaces/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  /*private REST_API_SERVER = 'http://localhost:8080';

  constructor(private http: HttpClient) {

  }
  findEmployeeById(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(`/employee/${employeeId}`);
  }

  findAllEmployees(): Observable<Employee[]> {
    return this.http.get('/employees')
      .pipe(
        map(res => res['payload'])
      );
  }

  findEmployees(pageNumber = 0, pageSize = 10):  Observable<Employee[]> {
    return this.http.get(this.REST_API_SERVER + '/employees', {
      params: new HttpParams()
        .set('pageNumber', pageNumber.toString())
        .set('pageSize', pageSize.toString())
    }).pipe(
      map(res =>  res['payload'])
    );
  }
*/
}
