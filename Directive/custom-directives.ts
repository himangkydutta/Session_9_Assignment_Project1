import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[custlighter]',
  inputs: ['bgColor','colour:custlighter']

})
export class CustDirective {

  //Using Custom derictive for mouse over

  constructor(private el: ElementRef) { }

  set colour(color: string) {
        this.el.nativeElement.style.color = color;
    }
    set bgColor(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }

  @HostListener('mouseenter', ['$event'])
  OnMouseEnter(event: any) {
    const text = event.target.innerText;
    switch (text) {
      case '*':
        this.highlight('Blue');
        break;
      case '**':
        this.highlight('Blue');
        break;
      case '***':
        this.highlight('Maroon');
        break;
      case '****':
        this.highlight('Maroon');
        break;
       case '*****':
        this.highlight('Green');
        break;
      default:
        this.highlight(null);
        break;
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
