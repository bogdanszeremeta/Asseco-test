import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appUp]'
})
export class UpDirective {

  constructor(
    private r: Renderer2,
    private el: ElementRef
  ) {
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrollFunction();
  }

  scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      this.r.setStyle(this.el.nativeElement, 'display', 'block')
    } else {
      this.r.setStyle(this.el.nativeElement, 'display', 'none')
    }
  }

}
