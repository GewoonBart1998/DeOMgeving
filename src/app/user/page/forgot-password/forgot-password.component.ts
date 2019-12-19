import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {UserService} from '../../shared/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  forgotPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.email]),
  }, [Validators.required, Validators.maxLength(255)]);


  constructor(private userService: UserService, private snackbar: MatSnackBar) {
  }

  onSubmit() {
    if (!this.forgotPasswordForm.valid) {
      return;
    }

    const email = this.forgotPasswordForm.value.email;
    this.userService.forgetPassword(email).subscribe(
      res => {

      },
      error => {

      });
  }

  private createSnackbar(message: string) {
    this.snackbar.open(message, null, {
      verticalPosition: 'top',
      duration: 4000
    });
  }

}
