import {Component, OnInit, NgZone} from '@angular/core';
// import {UserService} from '../../../shared/user.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

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
<<<<<<< HEAD
=======
    public userService: UserService,
    private ngZone: NgZone,
    private router: Router
>>>>>>> e0d2f68693a673b8b419b71d0260ac571d93f138
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
<<<<<<< HEAD
    console.log(this.userForm.value);
=======
    // console.log(this.userForm.value);
    // console.log("hallo");
    this.userService.CreateUser(this.userForm.value).subscribe(res => {
      console.log('User added!')
      this.ngZone.run(() => this.router.navigateByUrl('/user-list'))
    });

>>>>>>> e0d2f68693a673b8b419b71d0260ac571d93f138
  }

}
