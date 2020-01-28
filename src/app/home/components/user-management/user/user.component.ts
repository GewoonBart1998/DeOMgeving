import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../../user/shared/user.service';
import {User} from '../../../../user/shared/user';
import {ConfirmActionComponent} from '../../../../shared/components/confirm-action.component';
import {MatDialog} from '@angular/material';
import {SnackbarService} from '../../../../shared/services/snackbar.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: User;
  userForm: FormGroup;
  isUnidentified = false;
  isUserRemoved = false;

  constructor(private userService: UserService, private dialog: MatDialog, private snackbar: SnackbarService) {
  }

  ngOnInit() {
    this.buildForm(this.user.role.toString());
    this.checkUserIfUnidentified();
  }

  onDelete() {
    let dialogRef = this.dialog.open(ConfirmActionComponent, {
      data: {
        title: 'Gebruiker verwijderen?',
        message: 'Weet u zeker dat u deze gebruiker wilt verwijderen?',
        confirmButtonText: 'verwijderen'
      },
      width: '750px',
      position: {top: '5%'}
    });


    dialogRef.afterClosed().subscribe(isConfirmed => {
      if (isConfirmed) {
        this.deleteUser();
      }
    });
  }

  deleteUser() {
    this.userService.removeUser(this.userForm.value.id).subscribe(res => {
      this.isUserRemoved = true;
    });
  }

  onSubmit() {
   this.updateUser()
  }

  upgradeRole() {
    if (this.isUnidentified) {
      this.buildForm('GEBRUIKER');

      this.updateUser();
      this.checkUserIfUnidentified();
    }
  }

  private buildForm(role) {
    this.userForm = new FormGroup({
        id: new FormControl(this.user.id),
        email: new FormControl(this.user.email),
        name: new FormControl(this.user.name),
        role: new FormControl(role),
      }, [Validators.required, Validators.maxLength(255)]
    );
  }

  private checkUserIfUnidentified() {
    if (this.user.role.toString() === 'UNIDENTIFIED') {
      this.isUnidentified = true;
    }
  }

  private updateUser() {
    this.userService.updateUser(this.userForm.value).subscribe(res => {
        this.snackbar.showMessage('Gebruiker aangepast!');
      },
      error => {
        this.snackbar.showMessage('Kon gebruiker niet aanpassen');
      });

  }
}
