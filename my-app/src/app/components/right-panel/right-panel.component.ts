import { Component, OnInit,  AfterViewInit, ElementRef,} from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ScoreSelectService } from '../../services/score-select.service';

declare var $:JQueryStatic;

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
