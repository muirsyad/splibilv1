import { Component,Input } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-global-button',
  standalone: true,
  imports: [NgIf],
  templateUrl: './global-button.component.html',
  styleUrl: './global-button.component.css'
})
export class GlobalButtonComponent {
  @Input() text!: string;
  @Input() link!: string;
  @Input() hvlink!:boolean;

}
