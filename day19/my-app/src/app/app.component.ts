import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListMessagesComponent } from './components/list-messages/list-messages.component';
import { AddMessageComponent } from './components/add-message/add-message.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListMessagesComponent, AddMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
