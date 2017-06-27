import { Injectable } from '@angular/core';

@Injectable()
export class ScoreSelectService {

  apExamSelected: boolean = false;
  ibHighExamSelected: boolean = false;
  ibStandardExamSelected: boolean = false;
  satExamSelected: boolean = false;
  constructor() { }

  public apClicked() {
    this.apExamSelected = true;
  }

  public ibHighClicked() {
    this.ibHighExamSelected = true;
  }

  public ibStandardClicked() {
    this.ibStandardExamSelected = true;
  }

  public satClicked() {
    this.satExamSelected = true;
  }

  public reset() {
    this.apExamSelected = false;
    this.ibHighExamSelected = false;
    this.ibStandardExamSelected = false;
    this.satExamSelected = false;
  }

}
