import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'fruit-card',
  templateUrl: 'fruitCard.html'
})
export class FruitCardComponent {

  @Input() fruit: any;
  @Output() deletePressed: EventEmitter<void>;

  constructor() {

    this.deletePressed = new EventEmitter<void>();
  }

  triggerDeletePressed() {

    this.deletePressed.emit();
  }
}
