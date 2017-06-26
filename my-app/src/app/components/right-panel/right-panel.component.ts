import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})

export class RightPanelComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
  noSubmittedScores: boolean = false;

}
