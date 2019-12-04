import { Component, OnInit, NgZone } from '@angular/core';
import { UserService } from '../../../shared/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  userForm: FormGroup;
  userArr: any = [];



  ngOnInit() {
    this.addUser()
  }

  constructor(
    public fb: FormBuilder,
    public userService: UserService
  ){ }

  addUser(){
    this.userForm = this.fb.group({
      user_Email: [''],
      user_name: [''],
      user_password: ['']
    })
  }

  registerUser(){
    console.log(this.userForm.value);
    this.userService.CreateUser(this.userForm.value)
    
  }

}
