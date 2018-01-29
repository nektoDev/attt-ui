import {Component, OnInit} from '@angular/core';
import {MessageService} from '../service/message.service';
import {MessageType} from '../model/message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) {
  }

  ngOnInit() {
  }

  getMessageClass(type: MessageType): string {
    switch (type) {
      case MessageType.INFO:
      default:
        return 'message-info';
      case MessageType.ERROR:
        return 'message-error';
      case MessageType.WARN:
        return 'message-warn';
      case MessageType.SUCCESS:
        return 'message-success';
    }
  }

}
