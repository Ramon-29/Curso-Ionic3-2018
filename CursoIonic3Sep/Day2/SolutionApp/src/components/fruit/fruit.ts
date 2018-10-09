import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fruit',
  templateUrl: 'fruit.html'
})
export class FruitComponent {

  @Input() fruitObj: string;

  @Output() viewDetailsPressed: EventEmitter<void>;

  constructor() {

    this.viewDetailsPressed = new EventEmitter<void>();
  }

  triggerViewDetailsPressed() {

    this.viewDetailsPressed.emit();
  }
}
