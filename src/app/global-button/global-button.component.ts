import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-global-button',
  standalone: true,
  imports: [],
  templateUrl: './global-button.component.html',
  styleUrl: './global-button.component.css'
})
export class GlobalButtonComponent {
  @Input() text!: string;
  @Input() link!: string;

}
