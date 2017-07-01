import { Component, OnInit,  AfterViewInit, ElementRef,} from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ScoreSelectService } from '../../services/score-select.service';
import { AddExamService } from '../../services/add-exam.service';


declare var $:JQueryStatic;

@Component({
  selector: 'right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})

export class RightPanelComponent implements OnInit {
  constructor(
    private _scoreSelect: ScoreSelectService,
    private _addExam: AddExamService) { }
    
    ngOnInit() { }
    noSubmittedScores: boolean = true;
}
