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
  users: Array<User>;

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

  onSubmit(id, email, name, role) {
    let user = new User();
    user.email = email;
    user.name = name;
    user.role = role;
    user.id = id;
    this.userService.updateUser(user).subscribe(res => {
       console.log('User updated!');
    });
   }
}
