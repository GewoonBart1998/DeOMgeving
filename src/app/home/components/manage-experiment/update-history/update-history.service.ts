import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {UpdateMessage} from './update-message.model';
import {ApiService} from "../../../../shared/services/api.service";
import {Message} from "@angular/compiler/src/i18n/i18n_ast";

@Injectable({
  providedIn: 'root'
})export class UpdateHistoryService {
  resourcePath = '/messages';

  messagesChanged = new Subject<UpdateMessage[]>();

  private messages: UpdateMessage[] = [];

  constructor(private api: ApiService) {
  }

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

  post(message: UpdateMessage, experimentId: number) {
    return this.api.post(this.resourcePath + '/' + experimentId, message);
  }

  getAllMessages(experimentId: number){
    return this.api.get<Message>(this.resourcePath + '/' + experimentId);
  }
}

