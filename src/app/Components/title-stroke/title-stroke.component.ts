import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-title-stroke',
  standalone: true,
  imports: [],
  templateUrl: './title-stroke.component.html',
  styleUrl: './title-stroke.component.css'
})
export class TitleStrokeComponent {

  @Input() title!:string
}
