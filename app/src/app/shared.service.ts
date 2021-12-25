import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { Observable,throwError  } from "rxjs";
import { retry, catchError } from 'rxjs/operators';
import { Employee } from './shared/employee';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
    readonly APIUrl = "http://localhost:8090/api/Employee";
    readonly auth_token=localStorage.getItem("access_token");
    constructor(private http: HttpClient) {}
    httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.auth_token}`
      })
    }
    
    getEmployeeList(): Observable<Employee> {
      return this.http.get<Employee>(this.APIUrl + '/GetEmployees',this.httpHeader)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }
    create(employee:Employee): Observable<Employee> {
      console.log(JSON.stringify(employee));
      return this.http.post<Employee>(this.APIUrl + '/AddEmployee', JSON.stringify(employee), this.httpHeader)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    } 

    update(data:Employee): Observable<Employee> {
      return this.http.put<Employee>(this.APIUrl + '/UpdateEmployee', JSON.stringify(data), this.httpHeader)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }

    delete(id:any){
      return this.http.delete<Employee>(this.APIUrl + '/DeleteEmployee/'+JSON.stringify(id),this.httpHeader)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }

    handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        console.error('An error occurred:', error.error.message);
      } else {
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      return throwError(
        'Something bad happened; please try again later.');
    };
}
