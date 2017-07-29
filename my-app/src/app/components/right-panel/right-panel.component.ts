import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

import { ScoreSelectService } from '../../services/score-select.service';
import { ExamService } from '../../services/exam.service';
import { ConvertScoreService } from '../../services/convert-score.service';

@Component({
  selector: 'right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})

export class RightPanelComponent implements OnInit {
  constructor(
    public _scoreSelect: ScoreSelectService,
    public _exam: ExamService,
    public _convertScore: ConvertScoreService) { }
  ngOnInit() { }
}
