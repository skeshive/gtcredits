import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})

export class LeftPanelComponent implements OnInit {
  constructor() { }
  ngOnInit() { }

  apExamSelected: boolean = false;
  ibHighExamSelected: boolean = false;
  ibStandardExamSelected: boolean = false;
  satExamSelected: boolean = false;

  public apClicked() {
    this.apExamSelected = true;
  }

  public ibHighClicked() {
    this.ibHighExamSelected = true;
  }

  public ibStandardClicked() {
    this.ibStandardExamSelected = true;
  }

  public satClicked() {
    this.satExamSelected = true;
  }

  public reset() {
    this.apExamSelected = false;
    this.ibHighExamSelected = false;
    this.ibStandardExamSelected = false;
    this.satExamSelected = false;
  }

}
