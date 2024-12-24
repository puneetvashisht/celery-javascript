import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {


  constructor(private httpClient: HttpClient){

  }

  addMessage(message: string){
    this.messages.push(message)
  }

  fetchMessages(){
    this.httpClient.get('http://localhost:3000/messages')
    
    //Angular using Observable using RxJS
    // .toPromise()
    // .then((data:any) => this.messages = data)
    .subscribe((data:any) => this.messages = data)
  }

  messages: Array<string> =  ['test', 'Log Message 1 ', 'Log Message 2', 'Log Message 3', 'log test messages']

}
