import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { DatePipe, NgFor, UpperCasePipe } from '@angular/common';
import { SearchMessagesPipe } from '../../pipes/search-messages.pipe';

@Component({
  selector: 'app-list-messages',
  imports: [NgFor, UpperCasePipe, SearchMessagesPipe, DatePipe],
  templateUrl: './list-messages.component.html',
  styleUrl: './list-messages.component.css'
})
export class ListMessagesComponent implements OnInit {


    today : Date  = new Date();
    constructor(public messageService : MessageService){

    }
  ngOnInit(): void {
    this.messageService.fetchMessages();
  }

    // messages: Array<string> =  ['Log Message 1 ', 'Log Message 2', 'Log Message 3']
}
