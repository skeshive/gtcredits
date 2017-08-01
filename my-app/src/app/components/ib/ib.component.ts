import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ScoreSelectService } from '../../services/score-select.service';

@Component({
  selector: 'ib',
  templateUrl: 'ib.component.html',
  styleUrls: ['../../components/left-panel/left-panel.component.css']
})

export class IBComponent implements OnInit {
  constructor(
    private _scoreSelect: ScoreSelectService) { }
  ngOnInit() { }
}
