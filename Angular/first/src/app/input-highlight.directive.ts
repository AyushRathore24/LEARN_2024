import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInputHighlight]'
})
export class InputHighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('input') onInput() {
    this.highlight();
  }

  @HostListener('focus') onFocus() {
    this.highlight();
  }

  @HostListener('blur') onBlur() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'white');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
  }

  private highlight() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
  }
}
