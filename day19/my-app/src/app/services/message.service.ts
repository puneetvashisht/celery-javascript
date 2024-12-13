import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {


  constructor(private httpClient: HttpClient){

  }

  fetchMessages(){
    // this.httpClient.g
  }

  messages: Array<string> =  ['test', 'Log Message 1 ', 'Log Message 2', 'Log Message 3', 'log test messages']

}
