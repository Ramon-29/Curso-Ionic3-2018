import { Component, OnInit, Input, ViewChild, Renderer } from '@angular/core';

@Component({
  selector: 'expandable',
  templateUrl: 'expandable.html'
})
export class ExpandableComponent implements OnInit {

  @Input() title: string;

  private isExpanded: boolean = false;
  @ViewChild('cc') cardContent: any;

  constructor(public renderer: Renderer) {

  }

  ngOnInit() {
    this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
  }

  toggleExpand() {
    if (this.isExpanded) {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "500px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "13px 16px");
    }
    this.isExpanded = !this.isExpanded;
  }

}
