import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../shared/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  private isPasswordVisible: boolean;
  changePasswordFormGroup: FormGroup;
  private readonly changePasswordToken: string;

  constructor(private userService: UserService, private snackbar: MatSnackBar,
              private route: ActivatedRoute, private router: Router) {
    this.changePasswordToken = this.getTokenFromRoute();
  }


  ngOnInit(): void {
    this.isPasswordVisible = false;
    this.changePasswordFormGroup = this.createChangePasswordFormGroup();
  }

  onFormSubmit() {
    if (!this.FormIsValid()) {
      return;
    }

    const model = this.createRequestModel();
    console.log(model);
    this.userService.changePassword(model).subscribe(
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
    const passwordStringPattern = this.createPasswordValidateRegex();
    return new FormGroup(
      {
        password: new FormControl('', Validators.pattern(passwordStringPattern)),
        passwordRepeated: new FormControl(''), // TODO add password repeat validation
        token: new FormControl(this.changePasswordToken, Validators.required)
      }, [Validators.required, Validators.maxLength(255)]
    );
  }

  private getPasswordIcon() {
    return this.isPasswordVisible ? 'visibility_off' : 'visibility';
  }

  private getPasswordInputType() {
    return this.isPasswordVisible ? 'text' : 'password';
  }

  private toggedPasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  private FormIsValid() {
    return this.changePasswordFormGroup.valid;
  }

  private getTokenFromRoute() {
    return this.route.snapshot.paramMap.get('token');
  }

  private createRequestModel() {
    return (({password, token}) => ({password, token}))(this.changePasswordFormGroup.value);
  }

  private createPasswordValidateRegex() {
    return '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';
  }
}

