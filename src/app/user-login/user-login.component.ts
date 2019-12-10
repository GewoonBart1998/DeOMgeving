import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  hide = true;

  userLoginForm = new FormGroup({
    email: new FormControl('', [Validators.email]),
    password: new FormControl('')
  }, [Validators.required, Validators.maxLength(255)]);

  ngOnInit() {

  }

  onLogin() {

  }

}
