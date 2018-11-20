import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[background-image]'
})
export class BackgroundImageDirective {

  @Input('background-image') imgSrc: string;

  constructor(private element: ElementRef<HTMLElement>) { }

  ngAfterViewInit() {
    this.element.nativeElement.style.backgroundImage = this.imgSrc;
  }

}
