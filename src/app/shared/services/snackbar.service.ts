import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar: MatSnackBar) {

  }

  displayMessage(message: string, durationInSeconds: number) {
    this.snackbar.open(message, '', {
      duration: durationInSeconds * 1000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }


  displayMessageCenter(message: string, durationInSeconds: number) {
    this.snackbar.open(message, '', {
      duration: durationInSeconds * 1000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  }

}
