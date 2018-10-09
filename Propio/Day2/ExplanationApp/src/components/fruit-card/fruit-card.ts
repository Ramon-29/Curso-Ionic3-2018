import { Component, OnInit, OnDestroy, Input } from '@angular/core';
//import { NavController } from 'ionic-angular';



@Component({
  selector: 'fruit-card',
  templateUrl: 'fruit-card.html'
})

export class FruitCardComponent{

  @Input() public fruit: any;

  constructor() {

  }  
}
