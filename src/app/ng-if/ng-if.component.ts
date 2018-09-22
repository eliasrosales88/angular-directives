import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
  isDisaled = true;
  paragraphCreated = false;
  paragraphContent = '';
  constructor() { }

  createParagraph(){
    this.paragraphCreated = true;
    this.isDisaled = false;
  }

  clearParagraph(){
    this.paragraphCreated = false;
    this.isDisaled = true;
  }
  ngOnInit() {
  }

}
