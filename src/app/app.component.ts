import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalButtonComponent } from './global-button/global-button.component';
import { LandingComponent } from './landing/landing.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'split-bil';
}
