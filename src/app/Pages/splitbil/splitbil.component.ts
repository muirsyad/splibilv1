import { Component } from '@angular/core';
import { TitleStrokeComponent } from '../../Components/title-stroke/title-stroke.component';
import { OnInit } from '@angular/core';
import { Item } from '../../model/item';
import { NgFor,NgClass } from '@angular/common';
import { GlobalButtonComponent } from '../../global-button/global-button.component';
import { BackdropComponent } from '../../Components/backdrop/backdrop.component';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-splitbil',
  standalone: true,
  imports: [TitleStrokeComponent,NgFor,GlobalButtonComponent,BackdropComponent,NgClass],
  templateUrl: './splitbil.component.html',
  styleUrl: './splitbil.component.css'
})
export class SplitbilComponent implements OnInit {
  total:string=""
  itemList!:Item[]
  paxlist!:string[]
  backdrop:boolean = false
  modal:boolean[]=[]
  ngOnInit() {
    var x = localStorage.getItem("item")
    var y = localStorage.getItem("pax")
    // x= JSON.parse(x!)
    
    this.itemList = JSON.parse(x!)
    this.paxlist =  JSON.parse(y!)
    var itemlit:Item[] = this.itemList
    var sum:number=0
    itemlit.forEach((element)=>{
      console.log(element)
      sum+=element.price
    })

    this.paxlist.forEach((element)=>{
      this.modal.push(false)
    })
    this.total = sum.toString()
    
    
    
    console.log(this.modal)
  }
  toggelback(){
    this.backdrop= !this.backdrop
    this.paxlist.forEach((element,id)=>{
      this.modal[id] = false
    })
    
  }
  openmodal( id:number){
    this.modal[id] = !this.modal[id]
    this.backdrop= !this.backdrop
  }
  
}
