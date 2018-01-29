export class Message {
  type: MessageType;
  message: string;
}

export enum MessageType {
  INFO,
  SUCCESS,
  ERROR,
  WARN
}
