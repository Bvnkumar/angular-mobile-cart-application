import {Component,Output,Input,EventEmitter } from '@angular/core';

@Component({
  selector:'rating',
  templateUrl:'./rating.component.html',
  styleUrls:['./rating.component.scss']
})
export class RatingBar{
   given_rate;
  @Output() rating=new EventEmitter();
 limit:[]=[{id:1,valid:false},{id:2,valid:false},{id:3,valid:false},{id:4,valid:false},{id:5,valid:false}];
 limits:[];
 constructor(){

 }
 getRating(){
   console.log("in the rating");
   this.given_rate=event.target.attributes.getNamedItem('data-index').value;
   console.log("this.given_rate",this.given_rate)
   this.rating.emit(event.target.attributes.getNamedItem('data-index').value);
   this.limits=this.limit.filter(data=>{
     console.log("data",data);
    let  i=0
     while(i<=this.given_rate){
data.valid=true;
i++;
   } return true;
   })

 console.log("limit after",this.limits)
}
}