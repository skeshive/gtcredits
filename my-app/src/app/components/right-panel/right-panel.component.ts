import { Component, OnInit,  AfterViewInit, ElementRef, Inject} from '@angular/core';
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

    public test() {
        $('.list-group-item').attr('id', function(i) {
            console.log(i+1);
            return (i+1);
        });
    }

    public toggleSubmittedScores() {
      this.noSubmittedScores = false;
    }

    reset() {
        this.noSubmittedScores = true;
        this._addExam.removeAll();
    }

    public close() {
        $('.close').closest('ul').fadeOut( "slow" );
    }
}
