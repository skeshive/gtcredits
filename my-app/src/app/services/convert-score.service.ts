import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Exam } from '../models/exam';
import { ExamService } from './exam.service';

@Injectable()
export class ConvertScoreService {
  private totalHours: number = 0;
  private academicStanding: string = '';
  private displayResults = false;

  constructor(
  private http: Http,
  private _exam: ExamService) { }

  private separateData() {
    this.displayResults = true;
    this._exam.examArr.forEach(exam => {
      this.http.get(this.getRequestURL(exam)).map(res => res).subscribe(res => {
        var data = JSON.parse(res['_body']);
        if (exam.getExceptionArray().includes(exam.getName())) {
          this.parseExceptionData(exam, data);
        } else {
          this.parseData(exam, data);
        }
        if (this._exam.examArr.every(exam => exam.getTranslatedHours() != null)) {
          if (this._exam.examArr.every(exam => exam.getTranslatedCourse() != null)) {
            this._exam.examArr.forEach(exam => {
              exam.setName(exam.getName().replace("+",""));
              exam.setName(exam.getName().replace("++",""));
            });
            this.calculateTotalHours();
          }
        }
      });
    });
  }

  private getRequestURL(exam: Exam): string {
    switch(exam.getType()) {
      case 'AP':
        exam.setExceptionArray(["Chemistry", "Chinese", "Japanese", "Music Theory"]);
        return '../assets/data/ap.json';
      case 'IB-High':
        exam.setExceptionArray(["Biology"]);
        return '../assets/data/ib-high.json';
      case 'IB-Standard':
        exam.setExceptionArray([]);
        return '../assets/data/ib-standard.json';
      case 'SAT':
        exam.setExceptionArray(["Chemistry"]);
        return '../assets/data/sat.json';
    }
    return null;
  }

  private parseData(exam, data) {
    if (data[exam.getName()]['scores'].includes(parseInt(exam.getScore()))) {
      exam.setTranslatedCourse(data[exam.getName()]['course']);
      exam.setTranslatedHours(data[exam.getName()]['hours']);
    } else if (exam.getType() == 'SAT' && exam.getScore() > data[exam.getName()]['scores'][0]) {
        exam.setTranslatedCourse(data[exam.getName()]['course']);
        exam.setTranslatedHours(data[exam.getName()]['hours']);
    } else {
        exam.setTranslatedCourse('SCORE DOES NOT TRANSLATE');
        exam.setTranslatedHours(0);
    }
  }

  private parseExceptionData(exam, data) {
    if (parseInt(exam.getScore()) < data[exam.getName()]['scores'][0]) {
      exam.setTranslatedCourse('SCORE DOES NOT TRANSLATE');
      exam.setTranslatedHours(0);
    } else if (exam.getType() == 'SAT' && exam.getExceptionArray().includes("Chemistry")) {
        if (parseInt(exam.getScore()) >= 730) {
          exam.setName(exam.getName() + "+");
          exam.setTranslatedCourse(data[exam.getName()]['course']);
          exam.setTranslatedHours(data[exam.getName()]['hours']);
        } else {
            exam.setTranslatedCourse(data[exam.getName()]['course']);
            exam.setTranslatedHours(data[exam.getName()]['hours']);
        }
    } else {
        while (!data[exam.getName()]['scores'].includes(parseInt(exam.getScore()))) {
          exam.setName(exam.getName() + "+");
        }
        exam.setTranslatedCourse(data[exam.getName()]['course']);
        exam.setTranslatedHours(data[exam.getName()]['hours']);
    }
  }

  private calculateTotalHours() {
    this._exam.examArr.forEach (exam => {
      this.totalHours = this.totalHours + exam.getTranslatedHours();
    });
    this.calculateAcademicStanding();
  }

  private calculateAcademicStanding() {
    if (this.totalHours > 89) {
      this.academicStanding = "SENIOR";
    } else if (this.totalHours > 59) {
      this.academicStanding = "JUNIOR";
    } else if (this.totalHours > 29) {
      this.academicStanding = "SOPHOMORE";
    } else {
      this.academicStanding = "FRESHMAN";
    }
  }

  private setTotalHours(totalHours: number) {
    this.totalHours = totalHours;
  }

  private setAcademicStanding(academicStanding: string) {
    this.academicStanding = academicStanding;
  }

  private setDisplayResults(displayResults: boolean) {
    this.displayResults = displayResults;
  }
}
