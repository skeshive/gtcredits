import { Component, OnInit,  AfterViewInit, ElementRef, Inject} from '@angular/core';
import { RightPanelComponent } from '../right-panel/right-panel.component';

import { AddExamService } from '../../services/add-exam.service';
import { ConvertScoreService } from '../../services/convert-score.service';

@Component({
    selector: 'results',
    templateUrl: 'results.component.html',
    styleUrls: ['results.component.css']
})

export class ResultsComponent implements OnInit {
  constructor(
    private _rightPanel: RightPanelComponent,
    private _addExam: AddExamService,
    private _convertScore: ConvertScoreService) { }
    ngOnInit() { }

  public reset() {
    this._rightPanel.displayResults= false;
    this._addExam.removeAll();
  }
}
