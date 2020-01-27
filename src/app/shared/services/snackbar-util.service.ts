import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarVerticalPosition} from '@angular/material';
import {MatSnackBarHorizontalPosition} from '@angular/material/snack-bar/typings/snack-bar-config';

@Injectable({
  providedIn: 'root'
})
export class SnackbarUtilService {

  standardDuration = 2000;
  standardVerticalPosition: MatSnackBarVerticalPosition = 'top';
  standardHorizontalPosition: MatSnackBarHorizontalPosition = 'right';

  constructor(private snackbar: MatSnackBar) { }

  showMessage(message: string,
              duration: number = this.standardDuration,
              verticalPosition: MatSnackBarVerticalPosition = this.standardVerticalPosition,
              horizontalPosition: MatSnackBarHorizontalPosition = this.standardHorizontalPosition) {
    this.snackbar.open(message, '', {
      duration: duration,
      verticalPosition: verticalPosition,
      horizontalPosition: horizontalPosition
    });
  }
}
