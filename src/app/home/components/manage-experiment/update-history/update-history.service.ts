import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {UpdateMessage} from './update-message.model';

@Injectable({
  providedIn: 'root'
})export class UpdateHistoryService {
  messagesChanged = new Subject<UpdateMessage[]>();

  private messages: UpdateMessage[] = [];

  setMessages(messages: UpdateMessage[]) {
    this.messages = messages;
  }

  getMessages() {
    return this.messages.slice();
  }

  addMessage(message: UpdateMessage) {
    this.messages.push(message);
    this.messagesChanged.next(this.messages.slice());
  }

}

