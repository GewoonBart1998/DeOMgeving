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

  getUsersByRole(role: string) {
    return this.api.get<Array<User>>(`${this.resourcePath}/usersByRole/` + role);
  }

  getAllUsers() {
    return this.api.get<Array<User>>(`${this.resourcePath}/getAllUsers`);
  }

  updateUser(user: User) {
    return this.api.put(`${this.resourcePath}`, user);
  }

  isUserLoggedIn() {
    return localStorage.getItem('jwtToken') != null;
  }

  logout() {
    localStorage.removeItem('jwtToken');
  }

  getCurrentUser() {
    return this.decodeJWT(this.getJwtToken());
  }

  getJwtToken() {
    return localStorage.getItem('jwtToken');
  }

  removeUser(id: number) {
    return this.api.delete('/user/remove/' + id);
  }

  /*https://stackoverflow.com/questions/38552003/how-to-decode-jwt-token-in-javascript-without-using-a-library */
  private decodeJWT(jwtToken: string) {

    if (jwtToken === null || jwtToken.length === 0) {
      return '';
    }

    const base64Url = jwtToken.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }
}
