import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {UserService} from '../../../../../user/shared/user.service';
import {User} from '../../../../../user/shared/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Array<User>;

  constructor(
    public fb: FormBuilder,
    public userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(response => {
      this.users = response;
    });
  }
}
