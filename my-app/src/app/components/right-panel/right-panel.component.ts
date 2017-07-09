import { Component, OnInit,  AfterViewInit, ElementRef, Inject} from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ScoreSelectService } from '../../services/score-select.service';
import { AddExamService } from '../../services/add-exam.service';


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

    displayResults: boolean = false;

    public toggleSubmittedScores() {
      this.displayResults = true;
    }

    public checkValidity(score) {
        if(score >= 0 && score <= 800) {
            this._addExam.addSelectedScore(score);
        } else {
            alert("enter a valid score smh");
        }
    }

    reset() {
      this.displayResults= false;
      this._addExam.removeAll();
    }
}
