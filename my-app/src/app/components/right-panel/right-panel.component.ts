import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

import { ScoreSelectService } from '../../services/score-select.service';
import { AddExamService } from '../../services/add-exam.service';
import { ConvertScoreService } from '../../services/convert-score.service';


@Component({
  selector: 'right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})

export class RightPanelComponent implements OnInit {
  constructor(
    private _scoreSelect: ScoreSelectService,
    private _addExam: AddExamService,
    private _convertScore: ConvertScoreService) { }
    ngOnInit() { }

    displayResults: boolean = false;

    public toggleDisplayResults() {
      this.displayResults = true;
    }

    public callConvertScoreService() {
      this._addExam.examArr.forEach(exam => {
        switch(exam.getType()) {
          case 'AP':
            this._convertScore.getAPData().subscribe(APData => {
              console.log(JSON.parse(APData['_body']));
            });
            break;
          case 'IB-High':
            this._convertScore.getIBHighData().subscribe(IBHData => {
              console.log(IBHData);
            });
            break;
          case 'IB-Standard':
            this._convertScore.getIBStandardData().subscribe(IBSData => {
              console.log(IBSData);
            });
            break;
          case 'SAT':
            this._convertScore.getSATData().subscribe(SATData => {
              console.log(SATData);
            });
            break;
        }
      });
    }
}
