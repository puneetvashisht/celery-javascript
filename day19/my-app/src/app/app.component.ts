import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListMessagesComponent } from './components/list-messages/list-messages.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListMessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
