import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'recommendation-card',
  templateUrl: 'recommendation-card.html'
})

export class RecommendationCardComponent{

  @Input() public recommendation: any;
  @Output() public deletePressed =  new EventEmitter<void>();

  constructor() {

  }  

  deleteRecommendation(){
    this.deletePressed.emit();
  }
}
