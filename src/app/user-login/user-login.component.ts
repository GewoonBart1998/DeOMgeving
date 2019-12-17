import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  hide = true;
  userLoginData: any;
  loginboolean: boolean;

  userLoginForm = new FormGroup({
    password: new FormControl(''),
    email: new FormControl('', [Validators.email])
  }, [Validators.required, Validators.maxLength(255)]);

  ngOnInit() {

  }

  constructor(
    public fb: FormBuilder,
    public userService: UserService,
    private router: Router
  ) {
  }

  checkLogin(res: any) {
    if (res.email === this.userLoginForm.value.email) {
      this.loginboolean = true;
      console.log(this.router.navigate(['/home']));
    }
  }

  onLogin() {
    this.userService.loginUser(this.userLoginForm.value).subscribe(res => {
      this.checkLogin(res);
    });
  }

}
