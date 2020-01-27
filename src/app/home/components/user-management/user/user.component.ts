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
  userrole= false;

  constructor(private userService: UserService) {
  }

  //TODO: add feedback when user executes an action
  ngOnInit() {
    this.userForm = new FormGroup({
        id: new FormControl(this.user.id),
        email: new FormControl(this.user.email),
        name: new FormControl(this.user.name),
        role: new FormControl(this.user.role.toString()),
      }, [Validators.required, Validators.maxLength(255)]
    );
    if (this.user.role.toString() === "UNIDENTIFIED")
      this.userrole = true;
  }
  onDelete() {
    this.userService.removeUser(this.userForm.value.id).subscribe(res => {
      console.log('User removed!');
      window.location.reload();
    });
  }


  onSubmit() {
    this.userService.updateUser(this.userForm.value).subscribe(res => {
    });
  }
  upgradeRole() {
    console.log("click!");
    if(this.user.role.toString() === "UNIDENTIFIED") {
      this.userForm = new FormGroup({
          id: new FormControl(this.user.id),
          email: new FormControl(this.user.email),
          name: new FormControl(this.user.name),
          role: new FormControl("GEBRUIKER"),
        }, [Validators.required, Validators.maxLength(255)]
      );
      this.userService.updateUser(this.userForm.value).subscribe(res => {
      });
      this.userrole = false;
    }
  }
}
