import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-title-shadow',
  standalone: true,
  imports: [],
  templateUrl: './title-shadow.component.html',
  styleUrl: './title-shadow.component.css'
})
export class TitleShadowComponent {
  @Input() title!:string 
}
