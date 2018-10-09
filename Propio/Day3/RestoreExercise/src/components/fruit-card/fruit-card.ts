import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'fruit-card',
  templateUrl: 'fruit-card.html'
})
export class FruitCardComponent {

  @Input() public fruit: any;

  @Output() public deletePressed = new EventEmitter<void>();

  constructor() {

  }

  deleteFruit() {

    this.deletePressed.emit();
  }
}
