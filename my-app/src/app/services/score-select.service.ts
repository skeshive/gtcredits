import { Injectable } from '@angular/core';

import { AddExamService } from './add-exam.service';

@Injectable()
export class ScoreSelectService {
  currName: string;
  apExamSelected: boolean = false;
  ibHighExamSelected: boolean = false;
  ibStandardExamSelected: boolean = false;
  satExamSelected: boolean = false;
  constructor(private _addExam: AddExamService) { }

  public apClicked(currName: string) {
    this.currName = currName;
    //alert(this.currName);
    this.reset();
    this.apExamSelected = true;
    this._addExam.createNewExam("ADD AP NAME HERE", "AP");
  }

  public ibHighClicked() {
    this.reset();
    this.ibHighExamSelected = true;
    this._addExam.createNewExam("ADD IB NAME HERE", "IB-High");
  }

  public ibStandardClicked() {
    this.reset();
    this.ibStandardExamSelected = true;
    this._addExam.createNewExam("ADD Standard NAME HERE", "IB-Standard");
  }

  public satClicked() {
    this.reset();
    this.satExamSelected = true;
    this._addExam.createNewExam("ADD SAT NAME HERE", "SAT");
  }

  public reset() {
    this.apExamSelected = false;
    this.ibHighExamSelected = false;
    this.ibStandardExamSelected = false;
    this.satExamSelected = false;
  }

}
