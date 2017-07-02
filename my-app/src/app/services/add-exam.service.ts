import { Injectable } from '@angular/core';

import { Exam } from 'app/exam';

@Injectable()
export class AddExamService {
  examArr: Exam[] =[];
  duplicateExists: boolean = false;
  exam = new Exam();

  public createNewExam(name:string, type:string) {
    this.exam.setName(name);
    this.exam.setType(type);
  }

  public addSelectedScore(score: number) {
    this.exam.setScore(score);
    this.checkDuplicates(this.exam);
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
      } else {
        alert("YIKES! This exam was already added.");
        this.duplicateExists = false;
      }
  }
}
