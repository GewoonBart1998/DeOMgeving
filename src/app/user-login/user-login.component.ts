import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../../shared/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userForm: FormGroup;
  userArr: any = [];

  constructor(
    public fb: FormBuilder,
    public userService: UserService
  ){ }

  ngOnInit() {
  }

  LoginUser(){
    this.userForm = this.fb.group({
      user_Email: [''],
      user_name: [''],
      user_password: ['']
    })
  }

}
