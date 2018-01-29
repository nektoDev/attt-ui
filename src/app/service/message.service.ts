import {Injectable} from '@angular/core';
import {Message, MessageType} from '../model/message';

@Injectable()
export class MessageService {
  messages: Message[] = [];

  add(message: string, type: MessageType) {
    const message = <Message>{message: message, type: type};
    this.messages.push(message);
    setTimeout(() => {
      this.remove(message);
    }, this.selectTimeout(type));

  }

  private selectTimeout(type: MessageType): number{
    switch (type) {
      case MessageType.ERROR: return 10000;
      case MessageType.WARN: return 5000;
      default: return 2000;
    }
  }

  info(message: string) {
    this.add(message, MessageType.INFO);
  }

  warn(message: string) {
    this.add(message, MessageType.WARN);
  }

  success(message: string) {
    this.add(message, MessageType.SUCCESS);
  }

  error(message: string) {
    this.add(message, MessageType.ERROR);
  }

  clear() {
    this.messages = [];
  }

  remove(message: Message) {
    const index = this.messages.indexOf(message);
    if (index > -1) {
      this.messages.splice(index, 1);
    }
  }

}
