import { Component } from '@angular/core';

@Component({
  selector: 'app-list-messages',
  imports: [],
  templateUrl: './list-messages.component.html',
  styleUrl: './list-messages.component.css'
})
export class ListMessagesComponent {
    messages: Array<string> =  ['Log Message 1 ', 'Log Message 2', 'Log Message 3']
}
