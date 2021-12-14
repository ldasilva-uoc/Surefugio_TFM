import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public messages: string;

  add(message: string) {
    this.messages = message;
  }
  get():string{
    return this.messages
  }

  clear() {
    this.messages = "";
  }
}
