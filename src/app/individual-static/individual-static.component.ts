import { Component } from '@angular/core';
import { TitleStrokeComponent } from '../Components/title-stroke/title-stroke.component';
import { GlobalButtonComponent } from '../global-button/global-button.component';
@Component({
  selector: 'app-individual-static',
  standalone: true,
  imports: [TitleStrokeComponent,GlobalButtonComponent],
  templateUrl: './individual-static.component.html',
  styleUrl: './individual-static.component.css'
})
export class IndividualStaticComponent {

}
