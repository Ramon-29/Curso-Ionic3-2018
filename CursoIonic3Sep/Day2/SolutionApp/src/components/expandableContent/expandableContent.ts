import { Component, Input } from '@angular/core';

@Component({
  selector: 'expandable-content',
  templateUrl: 'expandableContent.html'
})
export class ExpandableContentComponent {

  @Input() title: string;

  private isExpanded: boolean;

  constructor() {

    this.isExpanded = false;
  }

  togggleExpand() {

    this.isExpanded = !this.isExpanded;
  }
}
