import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './user';
import {Observable, throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import {ApiService} from '../services/api.service';
import {ChangePasswordModel} from '../change-password/model/change-password-model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  // Base url
  baseurl = 'http://localhost:8080';
  private resourcePath = '/users';

  constructor(private http: HttpClient, private api: ApiService) {
  }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // POST
  CreateUser(data): Observable<User> {
    console.log(data);
    return this.http.post<User>(this.baseurl + '/register', JSON.stringify(data), this.httpOptions)

      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  loginUser(data): Observable<User> {
    console.log(data);
    return this.http.post<User>(this.baseurl + '/login', JSON.stringify(data), this.httpOptions)

      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }


  // Error handling
  errorHandl(error) {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  forgetPassword(email: object) {
    return this.api.post(`${this.resourcePath}/${email}`, email);
  }

  changePassword(changePasswordModel: object) {
    return this.api.post(`${this.resourcePath}/change-password`, changePasswordModel);
  }
}
