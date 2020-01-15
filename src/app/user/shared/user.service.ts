import {Injectable} from '@angular/core';
import {ApiService} from '../../shared/services/api.service';
import {User} from './user';
import {Experiment} from '../../home/components/experiment-card/experiment';

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

  getUsersByRole(role: string) {
    return this.api.get<Array<User>>(`${this.resourcePath}/usersByRole/` + role);
  }

  getAllUsers() {
    return this.api.get<Array<User>>(`${this.resourcePath}/getAllUsers`);
  }

  updateUser(user: User) {
    return this.api.post('/updateUser', user);
  }


}
