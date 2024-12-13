import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BadgeComponent } from './components/badge.component';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-angular-app';
}
