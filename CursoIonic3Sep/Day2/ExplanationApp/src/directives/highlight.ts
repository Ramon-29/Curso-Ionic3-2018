import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') elBackgroundColor: string;

  @Input('highlight') highlightColor: string;

  constructor(private el: ElementRef) {

  }

  ngOnInit() {

    this.el.nativeElement.style.border = '2px solid transparent';
  }

  @HostListener('mouseenter') onMouseEnter() {

    this.elBackgroundColor = this.highlightColor;
    this.el.nativeElement.style.borderColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {

    this.elBackgroundColor = null;
    this.el.nativeElement.style.borderColor = 'transparent';
  }
}
