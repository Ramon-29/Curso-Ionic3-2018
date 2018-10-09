import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
//import { NavController } from 'ionic-angular';



@Component({
  selector: 'fruit-card',
  templateUrl: 'fruit-card.html'
})

export class FruitCardComponent{

  @Input() public fruit: any;
  @Output() public deletePressed =  new EventEmitter<void>();

  constructor() {

  }  

  deleteFruit(){
    this.deletePressed.emit();
  }
}
