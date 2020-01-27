import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


interface ConfirmActionData {
  title: string,
  message: string,
  confirmButtonText: string
}

@Component({
  selector: 'app-confirm-action-dialog',
  templateUrl: './confirm-action.component.html'
})
export class ConfirmActionComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmActionComponent>,
    @Inject(MAT_DIALOG_DATA) public action: ConfirmActionData) {
  }

  confirmAction() {

  }

  declineAction() {
  }
}
