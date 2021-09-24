import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {EmployeeService} from './employee.service';
import {catchError, finalize} from 'rxjs/operators';

export class EmployeesDataSource implements DataSource<Employee> {

  private employeeSubject = new BehaviorSubject<Employee[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private employeeService: EmployeeService) {

  }

  loadLessons(employeeId: number,
              pageIndex: number,
              pageSize: number) {

    this.loadingSubject.next(true);

    this.employeeService.findEmployees(employeeId, pageIndex, pageSize).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
      .subscribe(employee => this.employeeSubject.next(employee));

  }

  connect(collectionViewer: CollectionViewer): Observable<Employee[]> {
    console.log('Connecting data source');
    return this.employeeSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.employeeSubject.complete();
    this.loadingSubject.complete();
  }

}
