import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'recommendation',
  templateUrl: 'recommendation.html'
})
export class RecommendationComponent {

  @Input() recommendationObj: string;

  @Output() viewDetailsPressed: EventEmitter<void>;

  constructor() {

    this.viewDetailsPressed = new EventEmitter<void>();
  }

  triggerViewDetailsPressed() {

    this.viewDetailsPressed.emit();
  }
}
