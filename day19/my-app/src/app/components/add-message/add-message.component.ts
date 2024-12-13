import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-add-message',
  imports: [],
  templateUrl: './add-message.component.html',
  styleUrl: './add-message.component.css'
})
export class AddMessageComponent {

  // messages: Array<string> =  ['Log Message 1 ', 'Log Message 2', 'Log Message 3']

  constructor(public messageService : MessageService){

  }


  addMessage(message: string){
    console.log(message);
    let newMessages = [...this.messageService.messages, message]
    this.messageService.messages = newMessages
    // this.messages.push(message)
    // console.log(this.messages);
    
    
  }

}
