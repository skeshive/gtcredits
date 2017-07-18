import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Exam } from '../exam';import { ExamService } from './exam.service';import 'rxjs/add/operator/map';@Injectable()export class ConvertScoreService {  private totalHours: number = 0;  private academicStanding: string = '';  private displayResults = false;  private exceptArr: string[] = []  constructor(  private http: Http,  private _exam: ExamService) { }  public getRequestURL(exam: Exam): string {    switch(exam.getType()) {      case 'AP':        this.exceptArr = ["Chemistry", "Chinese", "Japanese", "Music Theory"];        return '../assets/data/ap.json';      case 'IB-High':        this.exceptArr = ["Biology"];        return '../assets/data/ib-high.json';      case 'IB-Standard':        return '../assets/data/ib-standard.json';      case 'SAT':        this.exceptArr = ["Chemistry"];        return '../assets/data/sat.json';    }    return 'Type not found';  }  public parseData() {    this._exam.examArr.forEach(exam => {      this.http.get(this.getRequestURL(exam)).map(res => res).subscribe(res => {        var data = JSON.parse(res['_body']);        if(this.exceptArr.indexOf(exam.getName()) > -1) {            console.log(this.exceptArr);        }        if (exam.getScore() >= data[exam.getName()]['scores'][0]){          exam.setTranslatedCourse(data[exam.getName()]['course']);          exam.setTranslatedHours(data[exam.getName()]['hours']);        } else {          exam.setTranslatedCourse('SCORE DOES NOT TRANSLATE');          exam.setTranslatedHours(0);        }        if (this._exam.examArr.every(exam => exam.getTranslatedHours() != null)) {          this.calculateTotalHours();        }      });    });  }  public calculateTotalHours() {    this._exam.examArr.forEach (exam => {      this.totalHours = this.totalHours + exam.getTranslatedHours();    });    this.calculateAcademicStanding();  }  public calculateAcademicStanding() {    if (this.totalHours > 89) {      this.academicStanding = "SENIOR";    } else if (this.totalHours > 59) {      this.academicStanding = "JUNIOR";    } else if (this.totalHours > 29) {      this.academicStanding = "SOPHOMORE";    } else {      this.academicStanding = "FRESHMAN";    }    this.displayResults = true;  }  public setTotalHours(totalHours: number) {    this.totalHours = totalHours;  }  public setAcademicStanding(academicStanding: string) {    this.academicStanding = academicStanding;  }  public setDisplayResults(displayResults: boolean) {    this.displayResults = displayResults;  }}
