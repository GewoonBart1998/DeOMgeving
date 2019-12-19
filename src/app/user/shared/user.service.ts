import {Injectable} from '@angular/core';
import {ApiService} from '../../shared/services/api.service';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private resourcePath: string;
  constructor(private api: ApiService) {
    this.resourcePath = '/user';
  }

  createUser(user: User) {
    return this.api.post('/register', user);
  }

  login(user: User) {
    return this.api.post('/login', user);
  }

  forgetPassword(email: object) {
    return this.api.post(`${this.resourcePath}/${email}`, email);
  }

  changePassword(changePasswordModel: object) {
    return this.api.post(`${this.resourcePath}/change-password`, changePasswordModel);
  }


}
