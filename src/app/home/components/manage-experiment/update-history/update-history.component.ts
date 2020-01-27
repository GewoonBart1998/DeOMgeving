import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {UpdateMessage} from './update-message.model';
import {UpdateHistoryService} from './update-history.service';
import {Subscription} from 'rxjs';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {UserService} from '../../../../user/shared/user.service';
import {Experiment} from "../../experiment-card/experiment";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Message} from "@angular/compiler/src/i18n/i18n_ast";

@Component({
  selector: 'app-update-history',
  templateUrl: './update-history.component.html',
  styleUrls: ['./update-history.component.css']
})
export class UpdateHistoryComponent implements OnInit {
  @Input() experimentId: number

  messages: Message;
  messageForm = new FormGroup({
    message: new FormControl(''),
  }, [Validators.required, Validators.maxLength(400)]);

  constructor(private updateHistoryService: UpdateHistoryService, private userService: UserService,
              private snackbar: MatSnackBar) {


  }

  ngOnInit() {
    this.fetchMessages();
    this.updateScroll();
  }

  onSubmit() {
    const value = this.messageForm.value;
    const newMessage = new UpdateMessage(
      this.userService.getCurrentUser().name,
      value.message);

    this.updateHistoryService.post(newMessage, this.experimentId).subscribe(
      res => {
        this.displayMessage("Bericht toegevoegd.");
        this.fetchMessages();
        this.messageForm.reset();
      }
    )
  }

  private fetchMessages() {

    this.updateHistoryService.getAllMessages(this.experimentId).subscribe(
      res => {
        this.messages = res;
        this.updateScroll()

      },
      error => {
        this.displayMessage("kon geen update berichten ophalen.")
      }
    );
  }

  private displayMessage(message: string) {
    this.snackbar.open(message, '', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });

  }

  private updateScroll(){
    setTimeout( () => {
      var element: HTMLElement = document.getElementById("message-list");
      element.scrollTop = element.scrollHeight;
      console.log("probeer omlaag te scrollen");
    }, 100)

  }

}
