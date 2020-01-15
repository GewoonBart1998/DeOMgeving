import {Component, OnInit, Type} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../../user/shared/user.service';
import {User} from '../../../../user/shared/user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  role: string;
  email: string;
  id: number;


  users: Array<User>;

  userUpdateForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.email]),
    role: new FormControl(''),
    id: new FormControl('')
  }, [Validators.required, Validators.maxLength(255)]);

  constructor(
    public fb: FormBuilder,
    public userService: UserService
  ) {
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(response => {
      this.users = response;
    });

}


  // onSubmit() {
    // console.warn(this.userUpdateForm.value);
    // let user = new User();
    // this.email = user.email;
    // this.name = user.name;
    // this.role = user.role;
    // this.id = user.id;
    // this.userService.updateUser(user).subscribe(res => {
  //   //   console.log('User updated!');
  //   });
//   // }
}
