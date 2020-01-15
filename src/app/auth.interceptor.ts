import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {UserService} from './user/shared/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (!this.userService.isUserLoggedIn()) {
      return next.handle(req);
    }

    const jwtToken = this.userService.getJwtToken();

    const tokenizedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${jwtToken}`),
    });

    return next.handle(tokenizedReq);
  }

}
