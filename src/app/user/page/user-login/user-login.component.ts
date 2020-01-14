import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../../shared/user.service';

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

  constructor(
    public fb: FormBuilder,
    public userService: UserService,
    private router: Router
  ) {
  }

  checkLogin(res: any) {
    if (res.email === this.userLoginForm.value.email) {
      this.loginboolean = true;
      this.router.navigate(['/home'])
    }
  }

  onLogin() {
    this.userService.login(this.userLoginForm.value).subscribe(res => {
      this.checkLogin(res);
    });
  }

}
