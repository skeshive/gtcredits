import { Component, OnInit,  AfterViewInit, ElementRef, Inject} from '@angular/core';
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
      this._convertScore.getAPData().subscribe(res => {console.log(res);});
      this._convertScore.getIBHighData().subscribe(res => {console.log(res);});
      this._convertScore.getIBStandardData().subscribe(res => {console.log(res);});
      this._convertScore.getSATData().subscribe(res => {console.log(res);});
    }
}
