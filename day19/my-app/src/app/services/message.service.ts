import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {


  messages: Array<string> =  ['test', 'Log Message 1 ', 'Log Message 2', 'Log Message 3', 'log test messages']
  constructor() { }
}
