import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  constructor(public el: ElementRef) { }

  ngOnInit(){
    var element = this.el.nativeElement;
    element.style.background = 'green';
    element.style.padding = '10px';
    element.style.color = 'black';

  }

}
