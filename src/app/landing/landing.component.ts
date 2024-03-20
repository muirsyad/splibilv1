import { Component } from '@angular/core';
import { GlobalButtonComponent } from '../global-button/global-button.component';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [GlobalButtonComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
