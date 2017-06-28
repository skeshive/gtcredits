import { Injectable } from '@angular/core';

import { Exam } from '/Users/Shreya/Desktop/gtcredits/my-app/src/app/exam';

@Injectable()
export class AddExamService {

  createNewExam(name:string, type:string) {
    let exam = new Exam();
    exam.setName(name);
    exam.setType(type);
  }
}
