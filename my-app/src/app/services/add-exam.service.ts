import { Injectable } from '@angular/core';

import { Exam } from 'app/exam';

@Injectable()
export class AddExamService {
  examArr: Exam[] =[];
  duplicateExists: boolean = false;

  public createNewExam(name:string, type:string) {
    let exam = new Exam();
    exam.setName(name);
    exam.setType(type);
    this.checkDuplicates(exam);
  }

  public checkDuplicates(exam: Exam) {
    for (var i = 0; i < this.examArr.length; i++) {
      if ((this.examArr[i].getName() == exam.getName()) && (this.examArr[i].getType() == exam.getType())) {
        this.duplicateExists = true;
      }
    }
      if (!this.duplicateExists) {
        this.examArr.push(exam);
      } else {
        alert("YIKES! This exam was already added.");
        this.duplicateExists = false;
      }
  }
}
