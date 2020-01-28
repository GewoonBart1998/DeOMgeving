import {Component, OnInit} from '@angular/core';
import {User} from '../../../user/shared/user';
import {FormBuilder} from '@angular/forms';
import {UserService} from '../../../user/shared/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: Array<User>;

  constructor(
    public fb: FormBuilder,
    public userService: UserService) {
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(response => {
      this.users = response;
    });
  }

}
