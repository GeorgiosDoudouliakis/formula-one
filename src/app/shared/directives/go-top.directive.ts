import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGoTop]',
  providers: [
    {
      provide: Window,
      useValue: window
    }
  ]
})
export class GoTopDirective implements OnInit {
  private arrow: HTMLElement;

  constructor(private elRef: ElementRef, private renderer: Renderer2, private window: Window) { }

  ngOnInit() {
    this.arrow = this.elRef.nativeElement;
  }

  @HostListener('click') onClick() {
    this.window.scrollTo(0,0);
  }

  @HostListener('window: scroll') onScroll() {
    if(this.window.scrollY > 150) {
      this.renderer.addClass(this.arrow, 'show');
    } else {
      this.renderer.removeClass(this.arrow, 'show');
    }
  }
}
