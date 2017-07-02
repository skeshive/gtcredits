import { Injectable } from '@angular/core';

import { Exam } from 'app/exam';

@Injectable()
export class AddExamService {
  exam = new Exam();
  examArr: Exam[] =[];
  duplicateExists: boolean = false;
  examArrEmpty: boolean = true;

  public createNewExam(name:string, type:string) {
    this.exam.setName(name);
    this.exam.setType(type);
  }

  public addSelectedScore(score: number) {
    if(score >= 0 && score <= 800) {
        this.exam.setScore(score);
    } else {
        alert("enter a valid score smh");
    }
    this.checkDuplicates(this.exam);
  }

  public removeSelectedScore() {
    this.examArr.pop();
    //this.examArr.splice( *pass list item id*, 1 );
  }

  public checkDuplicates(exam: Exam) {
    for (var i = 0; i < this.examArr.length; i++) {
      if ((this.examArr[i].getName() == exam.getName()) && (this.examArr[i].getType() == exam.getType())) {
        this.duplicateExists = true;
      }
    }
    if (!this.duplicateExists) {
      this.examArr.push(exam);
      this.exam = new Exam();
      this.examArrEmpty = false;
    } else {
      alert("YIKES! This exam was already added.");
      this.duplicateExists = false;
    }
  }
}
