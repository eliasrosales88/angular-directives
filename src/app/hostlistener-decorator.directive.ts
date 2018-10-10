import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHostlistenerDecorator]'
})
export class HostlistenerDecoratorDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'lightgreen';

  constructor() { }
  
  @HostListener('mouseenter') mouseenter(eventData: Event){
    this.backgroundColor = "lightblue";
  }
  
  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.backgroundColor = "lightgreen";
  }
}
