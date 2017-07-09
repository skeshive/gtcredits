import { Injectable } from '@angular/core';

import { Exam } from 'app/exam';

import { RightPanelComponent } from 'app/components/right-panel/right-panel.component';

import { ScoreSelectService } from './score-select.service';

@Injectable()
export class AddExamService {
  exam = new Exam();
  examArr: Exam[] =[];
  duplicateExists: boolean = false;
  examArrEmpty: boolean = true;
  isInvalid: boolean = false;
  count = 0;
  _scoreSelect: ScoreSelectService;

  public createNewExam(name:string, type:string) {
    this.exam.setName(name);
    this.exam.setType(type);
    this.exam.setIndex(this.count);
  }

  public addSelectedScore(score: number) {
    if(score >= 0 && score <= 800) {
        this.exam.setScore(score);
        console.log(score);
    } else {
        alert("enter a valid score smh");
        console.log("failed");
        this.isInvalid = true;
    }
    this.checkDuplicates(this.exam);
  }

  public removeSelectedScore(index: number) {
    this.examArr.splice(index, 1);
    this.count--;

    if(this.examArr.length == 0) {
        this.examArrEmpty = true;
        this.count = 0;
    }

    for (var i = index; i < this.examArr.length; i++) {
      this.examArr[i].setIndex(this.examArr[i].getIndex() - 1);
    }
  }

  public removeAll() {
    this.examArr.splice(0, this.examArr.length);
    this.examArrEmpty = true;
    this.count = 0;
  }

  public checkDuplicates(exam: Exam) {
    for (var i = 0; i < this.examArr.length; i++) {
      if ((this.examArr[i].getName() == exam.getName()) && (this.examArr[i].getType() == exam.getType())) {
        this.duplicateExists = true;
      }
    }
    if (!this.duplicateExists) {
        if(!this.isInvalid) {
            this.examArr.push(exam);
            this.exam = new Exam();
            this.count++;
            this.examArrEmpty = false;
        }
    } else {
        alert("YIKES! This exam was already added.");
        this.duplicateExists = false;
    }
  }
}
