import {Component, OnInit} from '@angular/core';
import {UserService} from '../../user/shared/user.service';
import {User} from '../../user/shared/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private user: User;
  private userrole: String;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
    console.log(this.user);
  }

  getLoggedUserame() {
    if (this.user) {
      return this.user.name;
    }

    return 'onbekend';
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }

  usercheck() {
    this.userrole = this.user.role.toString();
  }
}
