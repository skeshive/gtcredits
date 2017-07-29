import { Component, OnInit,  AfterViewInit, ElementRef, Inject} from '@angular/core';

import { ExamService } from '../../services/exam.service';
import { ConvertScoreService } from '../../services/convert-score.service';

@Component({
  selector: 'results',
  templateUrl: 'results.component.html',
  styleUrls: ['results.component.css']
})

export class ResultsComponent implements OnInit {
  constructor(
    public _exam: ExamService,
    public _convertScore: ConvertScoreService) { }
  ngOnInit() { }

  public reset() {
    this._convertScore.setDisplayResults(false);
    this._exam.removeAll();
    this._convertScore.setTotalHours(0);
    this._convertScore.setAcademicStanding('FRESHMAN');
  }
}
