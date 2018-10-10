import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterApproach]'
})
export class BetterApproachDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');
  }

}
