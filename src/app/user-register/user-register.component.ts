import {Component, OnInit, NgZone} from '@angular/core';
// import {UserService} from '../../../shared/user.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  userForm: FormGroup;
  userArr: any = [];
  


  ngOnInit() {
    this.addUser();
  }

  constructor(
    public fb: FormBuilder,
    public userService: UserService,
    private ngZone: NgZone,
    private router: Router
  ) {
  }

  addUser() {
    this.userForm = this.fb.group({
      email: [''],
      name: [''],
      password: ['']
    });
  }

  registerUser() {
    // console.log(this.userForm.value);
    // console.log("hallo");
    this.userService.CreateUser(this.userForm.value).subscribe(res => {
      console.log('User added!')
      this.ngZone.run(() => this.router.navigateByUrl('/user-list'))
    });

  }

}
