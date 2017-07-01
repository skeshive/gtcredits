import { Injectable } from '@angular/core';

import { Exam } from 'app/exam';

@Injectable()
export class AddExamService {
  examArr: Exam[] =[];

  createNewExam(name:string, type:string) {
    let exam = new Exam();
    exam.setName(name);
    exam.setType(type);
    this.examArr.push(exam);
  }
}
