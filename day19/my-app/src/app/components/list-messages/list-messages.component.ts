import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { DatePipe, NgFor, UpperCasePipe } from '@angular/common';
import { SearchMessagesPipe } from '../../pipes/search-messages.pipe';

@Component({
  selector: 'app-list-messages',
  imports: [NgFor, UpperCasePipe, SearchMessagesPipe, DatePipe],
  templateUrl: './list-messages.component.html',
  styleUrl: './list-messages.component.css'
})
export class ListMessagesComponent {


    today : Date  = new Date();
    constructor(public messageService : MessageService){

    }

    // messages: Array<string> =  ['Log Message 1 ', 'Log Message 2', 'Log Message 3']
}
