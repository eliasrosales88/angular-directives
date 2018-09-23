import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent {
  randomNumber = Math.random();
  colorStatus: string = 'rojo';

  constructor() {
    this.colorStatus = this.randomNumber > 0.5 ? 'verde' : 'rojo';
   }



  getColorStatus(){
    return this.colorStatus;
  }
  getColor(){
    
    return this.colorStatus === 'verde' ? 'green': 'red';
  }
}
