import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ScoreSelectService } from '/Users/Shreya/desktop/gtcredits/my-app/src/app/services/score-select.service';

@Component({
  selector: 'left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})

export class LeftPanelComponent implements OnInit {
  constructor(private _scoreSelect: ScoreSelectService) { }
  ngOnInit() { }
}
