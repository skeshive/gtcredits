import { Component, OnInit,  AfterViewInit, ElementRef, Inject} from '@angular/core';
import { RightPanelComponent } from '../right-panel/right-panel.component';

import { ExamService } from '../../services/exam.service';
import { ConvertScoreService } from '../../services/convert-score.service';

@Component({
  selector: 'results',
  templateUrl: 'results.component.html',
  styleUrls: ['results.component.css']
})

export class ResultsComponent implements OnInit {
  constructor(
    private _rightPanel: RightPanelComponent,
    private _exam: ExamService,
    private _convertScore: ConvertScoreService) { }
  ngOnInit() { }

  public reset() {
    this._rightPanel.displayResults= false;
    this._exam.removeAll();
    this._convertScore.setTotalHours(0);
    this._convertScore.setAcademicStanding('FRESHMAN');
  }
}
