import {Injectable} from '@angular/core';
import {User} from 'shared/user';
import {ApiService} from './services/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiService) {
  }

  createUser(user: User) {
    return this.api.post('/register', user);
  }

  login(user: User) {
    return this.api.post('/login', user);
  }


}
