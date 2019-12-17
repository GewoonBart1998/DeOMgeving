import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import {UserService} from "../shared/user.service";
import { Router} from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePassForm = new FormGroup({
    email: new FormControl('', [Validators.email]),
  }, [Validators.required, Validators.maxLength(255)]);


  ngOnInit() {
  }

  constructor(
    public fb: FormBuilder,
    public userService: UserService,
    private ngZone: NgZone,
    private router: Router
  ) {
  }

  onSubmit() {
    console.warn(this.changePassForm.value);
  }

}
