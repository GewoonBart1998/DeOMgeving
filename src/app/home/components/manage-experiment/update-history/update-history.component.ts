import {Component, OnDestroy, OnInit} from '@angular/core';
import {UpdateMessage} from './update-message.model';
import {UpdateHistoryService} from './update-history.service';
import {Subscription} from 'rxjs';
import {FormGroup, NgForm} from '@angular/forms';
import {UserService} from '../../../../user/shared/user.service';

@Component({
  selector: 'app-update-history',
  templateUrl: './update-history.component.html',
  styleUrls: ['./update-history.component.css']
})
export class UpdateHistoryComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messages: UpdateMessage[];
  messageForm: FormGroup;

  constructor(private updateHistoryService: UpdateHistoryService, private userService: UserService) {
  }

  ngOnInit() {
    this.subscription = this.updateHistoryService.messagesChanged.subscribe(
      (messages: UpdateMessage[]) => {
        this.messages = messages;
      }
    );
    this.messages = this.updateHistoryService.getMessages();
    this.generateMessages();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    const value = this.messageForm.value;
    const newMessage = new UpdateMessage(
      this.messages.length,
      this.userService.getCurrentUser().name,
      this.messages[0].experimenttId,
      value.message,
      new Date());
  }

  private generateMessages() {
    for (let i = 0; i < 100; i++) {
      this.messages.push(new UpdateMessage(
        1,
        'Bob Marley',
        1,
        'asdfghjkjhgfdsdfghjklkjhgfdfghjkbbb',
        new Date()));
    }
  }
}
