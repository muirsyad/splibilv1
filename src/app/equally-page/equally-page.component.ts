import { Component, NgModule } from '@angular/core';
import { TitleShadowComponent } from '../Components/title-shadow/title-shadow.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-equally-page',
  standalone: true,
  imports: [TitleShadowComponent, ReactiveFormsModule],
  templateUrl: './equally-page.component.html',
  styleUrl: './equally-page.component.css'
})
export class EquallyPageComponent {

  saverange() {

    var amnt = parseInt(this.amount.value!);
    var px = parseInt(this.pax.value!);

    this.bal = amnt / px;



  }
  bal: number = 0;

  amount = new FormControl('0');
  pax = new FormControl('0');

}
