import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {UpdateMessage} from './update-message.model';
import {ApiService} from "../../../../shared/services/api.service";
import {Message} from "@angular/compiler/src/i18n/i18n_ast";

@Injectable({
  providedIn: 'root'
})export class UpdateHistoryService {
  resourcePath = '/messages';

  constructor(private api: ApiService) {
  }

  post(message: UpdateMessage, experimentId: number) {
    return this.api.post(this.resourcePath + '/' + experimentId, message);
  }

  getAllMessages(experimentId: number){
    return this.api.get<Message>(this.resourcePath + '/' + experimentId);
  }
}

