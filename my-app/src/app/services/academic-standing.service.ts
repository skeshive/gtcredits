import { Injectable } from '@angular/core';

import { ConvertScoreService } from './convert-score.service';

@Injectable()
export class AcademicStandingService {
  constructor(
    private _convertScore: ConvertScoreService) { }

  academicStanding: string;
  public getStanding(): string {
    if (this._convertScore.totalHours > 89) {
        this.academicStanding = "SENIOR";
    } else if (this._convertScore.totalHours > 59) {
        this.academicStanding = "JUNIOR";
    } else if (this._convertScore.totalHours > 29) {
        this.academicStanding = "SOPHOMORE";
    } else {
        this.academicStanding = "FRESHMAN";
    } return this.academicStanding;
  }
}
