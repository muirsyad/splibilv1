import { Component,Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-backdrop',
  standalone: true,
  imports: [NgClass],
  templateUrl: './backdrop.component.html',
  styleUrl: './backdrop.component.css'
})
export class BackdropComponent {

  @Input() back!:boolean
}
