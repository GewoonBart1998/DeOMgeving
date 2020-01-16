import {Component, Input, OnInit, Type} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../../user/shared/user.service';
import {User} from '../../../../user/shared/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: User;
  userForm: FormGroup;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userForm = new FormGroup({
        id: new FormControl(this.user.id),
        email: new FormControl(this.user.email),
        name: new FormControl(this.user.name),
        role: new FormControl(this.user.role.toString()),
      }, [Validators.required, Validators.maxLength(255)]
    );
  }



  onSubmit() {
    this.userService.updateUser(this.userForm.value).subscribe(res => {

      console.log('User updated!');
    });
  }
}
