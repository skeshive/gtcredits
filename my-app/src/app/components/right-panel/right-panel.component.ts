import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ScoreSelectService } from '/Users/Shreya/desktop/gtcredits/my-app/src/app/services/score-select.service';

@Component({
  selector: 'right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})

export class RightPanelComponent implements OnInit {
  constructor(private _scoreSelect: ScoreSelectService) { }
  ngOnInit() { }
  noSubmittedScores: boolean = true;
}
