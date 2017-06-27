import { Injectable } from '@angular/core';

@Injectable()
export class ScoreSelectService {

  apExamSelected: boolean = false;
  ibHighExamSelected: boolean = false;
  ibStandardExamSelected: boolean = false;
  satExamSelected: boolean = false;
  constructor() { }

  public apClicked() {
    this.reset();
    this.apExamSelected = true;
  }

  public ibHighClicked() {
    this.reset();
    this.ibHighExamSelected = true;
  }

  public ibStandardClicked() {
    this.reset();
    this.ibStandardExamSelected = true;
  }

  public satClicked() {
    this.reset();
    this.satExamSelected = true;
  }

  public reset() {
    this.apExamSelected = false;
    this.ibHighExamSelected = false;
    this.ibStandardExamSelected = false;
    this.satExamSelected = false;
  }

}
