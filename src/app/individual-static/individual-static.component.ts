import { Component } from '@angular/core';
import { TitleStrokeComponent } from '../Components/title-stroke/title-stroke.component';
import { GlobalButtonComponent } from '../global-button/global-button.component';
import { BigInputComponent } from '../Components/big-input/big-input.component';
import { NgClass,NgFor } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {Item} from '../model/item'; 

@Component({
  selector: 'app-individual-static',
  standalone: true,
  imports: [TitleStrokeComponent,GlobalButtonComponent,BigInputComponent,NgClass,ReactiveFormsModule,NgFor],
  templateUrl: './individual-static.component.html',
  styleUrl: './individual-static.component.css'
})
export class IndividualStaticComponent {
  
  modalopen:boolean[]=[false,false]
  backdrop:boolean=false
  


  person = new FormControl('')
  itemadd = new FormControl('')
  itemqty = new FormControl('')
  itemprice = new FormControl('')

  listPax:string[]=[]
  itemlist:Item[]=[
    // {item:"test",quantity:2,price:5}
  ]
  togglemodal(id:number){
    this.modalopen[id] = !this.modalopen[id]
    this.backdrop = !this.backdrop

  }
  toggle(){
    this.modalopen = [false,false]
    this.backdrop = !this.backdrop
  }
  addPerson(){

    var per = this.person.value
    if(per?.length! > 0){
      this.listPax.push(this.person.value!)
      localStorage.setItem('pax', JSON.stringify(this.listPax));
      this.person.reset()
    }
    console.log(this.listPax)
  }
  addItem(){
    var newItem:Item ={
      item: this.itemadd.value!,
      quantity:parseInt(this.itemqty.value!) ,
      price:parseInt(this.itemprice.value!)
    }
    this.itemlist.push(newItem)
    localStorage.setItem('item', JSON.stringify(this.itemlist));
    this.itemadd.reset()
    this.itemqty.reset()
    this.itemprice.reset()

  }
}
