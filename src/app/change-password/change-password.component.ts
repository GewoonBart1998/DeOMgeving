import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../shared/user.service';
import {MatSnackBar} from '@angular/material';
import {ChangePasswordModel} from './model/password-change-model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  private isPasswordVisable: boolean;
  private changePasswordModel: ChangePasswordModel;
  private changePasswordFormGroup: FormGroup;

  constructor(private userService: UserService, private snackbar: MatSnackBar,
              private route: ActivatedRoute, private router: Router) {

  }


  ngOnInit(): void {
    this.isPasswordVisable = false;
    this.changePasswordFormGroup = this.createChangePasswordFormGroup();
    this.changePasswordModel = {} as ChangePasswordModel;
    this.setUserTokenInModel();
  }

  onFormSubmit() {
    if (!this.FormIsValid()) {
      return;
    }

    this.userService.changePassword(this.changePasswordModel).subscribe(
      res => {

      },
      error => {
        this.createSnackbar('Faild to change password');
      });
  }

  private createSnackbar(message: string) {
    this.snackbar.open(message, null,
      {
        verticalPosition: 'top',
        duration: 4000
      }
    );
  }

  private createChangePasswordFormGroup() {
    return new FormGroup(
      {
        password: new FormControl('', Validators.min(8)),
        passwordRepeated: new FormControl('') // TODO add password repeat validation
      }, [Validators.required, Validators.maxLength(255)]
    );
  }

  private getPasswordIcon() {
    return this.isPasswordVisable ? 'visibility_off' : 'visibility';
  }

  private getPasswordInputType() {
    return this.isPasswordVisable ? 'text' : 'password';
  }

  private toggedPasswordVisibility() {
    this.isPasswordVisable = !this.isPasswordVisable;
  }

  private FormIsValid() {
    return this.changePasswordFormGroup.valid;
  }

  private setUserTokenInModel() {
    this.changePasswordModel.token = this.route.snapshot.paramMap.get('token');
  }
}

