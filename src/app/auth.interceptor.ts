import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {UserService} from './user/shared/user.service';
import {catchError, tap} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {ApiService} from './shared/services/api.service';
import {Router} from '@angular/router';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService: UserService, private apiService: ApiService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (!this.isUserLoggedIn()) {
      return next.handle(req);
    }

    const jwtToken = this.userService.getJwtToken();

    const tokenizedReq = this.closeRequestWithToken(req, jwtToken);

    return next.handle(tokenizedReq).pipe(
      catchError(err => {
        if (err instanceof HttpErrorResponse && err.status === 401) {
          return this.refreshToken(req, next);
        }

        return throwError(err);
      }));

  }

  isUserLoggedIn() {
    return this.userService.isUserLoggedIn();
  }

  closeRequestWithToken(req: HttpRequest<any>, jwtToken: string) {
    return req.clone({
      headers: req.headers.set('Authorization', `Bearer ${jwtToken}`),
    });
  }

  private refreshToken(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return this.apiService.get('/refresh').pipe(tap(
      res => {

        const token = this.saveJWT(res);
        console.log('Give Leander a big gift!');
        return next.handle(this.closeRequestWithToken(req, token));

      }
    ), catchError(err => {
      this.userService.logout();
      this.router.navigate(['/login']);
      return throwError(err);

    }));
  }

  private saveJWT(res: any) {
    this.userService.storeJwt(res);
    return res.jwtToken;
  }
}
