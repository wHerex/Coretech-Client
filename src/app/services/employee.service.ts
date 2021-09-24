import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Employee} from '../interfaces/employee';


@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) {

  }
  findEmployeeById(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(`/api/employee/${employeeId}`);
  }

  findAllEmployees(): Observable<Employee[]> {
    return this.http.get('/api/employees')
      .pipe(
        map(res => res['payload'])
      );
  }

/*  findAllCourseLessons(courseId: number): Observable<Lesson[]> {
    return this.http.get('/api/lessons', {
      params: new HttpParams()
        .set('courseId', courseId.toString())
        .set('pageNumber', '0')
        .set('pageSize', '1000')
    }).pipe(
      map(res =>  res['payload'])
    );
  }
*/
  findEmployees(
    courseId: number, pageNumber = 0, pageSize = 3):  Observable<Employee[]> {

    return this.http.get('/employees', {
      params: new HttpParams()
        .set('courseId', courseId.toString())
        .set('pageNumber', pageNumber.toString())
        .set('pageSize', pageSize.toString())
    }).pipe(
      map(res =>  res['payload'])
    );
  }

}
