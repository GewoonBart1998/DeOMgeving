import {Component, OnInit, NgZone} from '@angular/core';
// import {UserService} from '../../../shared/user.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  hide = true;


  userRegisterForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.email]),
    password: new FormControl('')
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
    console.warn(this.userRegisterForm.value);
    this.userService.CreateUser(this.userRegisterForm.value).subscribe(res => {
      console.log('User added!');
      this.ngZone.run(() => this.router.navigateByUrl('/user-list'));
    });
  }


}
