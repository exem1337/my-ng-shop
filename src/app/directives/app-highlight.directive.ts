import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[app-highlight]',
})
export class HighlightDirective implements OnChanges {
  @Input('app-highlight') isHighlight: boolean;
  constructor(private el: ElementRef) {
  }

  ngOnChanges(): void {
    if (this.isHighlight) {
      this.el.nativeElement.style.background = 'red';
    }
  }
}