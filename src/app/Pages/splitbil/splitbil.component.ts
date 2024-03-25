import { Component } from '@angular/core';
import { TitleStrokeComponent } from '../../Components/title-stroke/title-stroke.component';
import { OnInit } from '@angular/core';
import { Item } from '../../model/item';
import { NgFor,NgClass,NgIf } from '@angular/common';
import { GlobalButtonComponent } from '../../global-button/global-button.component';
import { BackdropComponent } from '../../Components/backdrop/backdrop.component';
import { elementAt } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-splitbil',
  standalone: true,
  imports: [TitleStrokeComponent,NgFor,GlobalButtonComponent,BackdropComponent,NgClass,NgIf],
  templateUrl: './splitbil.component.html',
  styleUrl: './splitbil.component.css'
})
export class SplitbilComponent implements OnInit {
  
  total:string=""
  itemList!:Item[]
  paxlist!:string[]
  paxpaidlist:number[] = []
  paxitem:number[][]=[]
  backdrop:boolean = false
  modal:boolean[]=[]
  npaid:number[]=[]

  paxxpaid:number[]=[]
  ngOnInit() {
    var x = localStorage.getItem("item")
    var y = localStorage.getItem("pax")
    // x= JSON.parse(x!)
    
    this.itemList = JSON.parse(x!)
    this.paxlist =  JSON.parse(y!)
    var itemlit:Item[] = this.itemList
    var sum:number=0
    var itemlit:Item[] = []
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
  
  // chk(itemid:number, paxid:number){
  //   // this.itemList[itemid].paid=[this.paxlist[paxid],"SS"]
  //   if( this.itemList[itemid].paid != undefined){
  //     if(this.itemList[itemid].paid!.includes(this.paxlist[paxid])){
  //       var index = this.itemList[itemid].paid!.indexOf(this.paxlist[paxid]);
  //       this.itemList[itemid].paid!.splice(index, 1);
        
  //     }else{
  //       this.itemList[itemid].paid!.push(this.paxlist[paxid])
  //     }
      
  //   }else{
  //     this.itemList[itemid].paid=[this.paxlist[paxid]]
  //   }

  //   console.log(this.paxlist[paxid])
  //   console.log(this.itemList[itemid])
  // }

  chk2(itemid:number, paxid:number){
    // this.itemList[itemid].paid=[this.paxlist[paxid],"SS"]
    if( this.itemList[itemid].paid != undefined){
      if(this.itemList[itemid].paid!.includes(paxid)){
        var index = this.itemList[itemid].paid!.indexOf(paxid);
        this.itemList[itemid].paid!.splice(index, 1);
        
      }else{
        this.itemList[itemid].paid!.push(paxid)
      }
      
    }else{
      this.itemList[itemid].paid=[paxid]
    }

    console.log(this.paxlist[paxid])
    console.log(this.itemList[itemid])
  }
  calc(){
    this.itemList.forEach((element,j)=>{
      if(element.paid != undefined){
        
        var nedpaid:number = element.price/element.paid.length
        console.log("Need to paid RM"+ nedpaid)
        this.npaid.push(nedpaid)
        this.paxlist.forEach((el,ind)=>{
          if(element.paid!.includes(ind)){
            console.log(this.paxlist[ind])
            console.log(this.npaid[j])
           
              // this.paxpaidlist = [this.npaid[j]]
              if(j<1){
                this.paxpaidlist.push(this.npaid[j])
              }else{
                this.paxpaidlist[ind] += this.npaid[j]
              }
              
           
             
          
           
           
            
          }else{
            console.log(this.paxlist[ind])
            console.log(0)
            if(j < 1){
              // this.paxpaidlist.push(0)
              this.paxpaidlist.push(0)
            }else{
              this.paxpaidlist[ind] += 0
            }
           

            
          }
          
          // console.log(element.paid!.includes(ind))
        }
        )
      }else{
        this.npaid.push(0)
      }
    })
    console.log(this.npaid)
    console.log(this.paxpaidlist)
  }
}
