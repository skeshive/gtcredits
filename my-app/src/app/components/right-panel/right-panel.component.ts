import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

import { ScoreSelectService } from '../../services/score-select.service';
import { ExamService } from '../../services/exam.service';
import { ConvertScoreService } from '../../services/convert-score.service';


@Component({
  selector: 'right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})

export class RightPanelComponent implements OnInit {
  constructor(
  private _scoreSelect: ScoreSelectService,
  private _addExam: ExamService,
  private _convertScore: ConvertScoreService) { }
  ngOnInit() { }

  displayResults: boolean = false;

  public toggleDisplayResults() {
  this.displayResults = true;
  }

  public callConvertScoreService() {
  this._addExam.examArr.forEach(exam => {
  switch(exam.getType()) {
  case 'AP':
  this._convertScore.getAPData().subscribe(res => {
  var apData = JSON.parse(res['_body']);
  if (exam.getScore() >= apData[exam.getName()]['scores'][0]){
  exam.setTranslatedCourse(apData[exam.getName()]['course']);
  exam.setTranslatedHours(apData[exam.getName()]['hours']);
  this._convertScore.addCourse(exam.getTranslatedCourse());
  console.log(this._convertScore.getCourses());
  } else {
  exam.setTranslatedCourse('SCORE DOES NOT TRANSLATE');
  exam.setTranslatedHours(0);
  }
  if (this._addExam.examArr.every(exam => exam.getTranslatedHours() != null)) {
  this._convertScore.calculateTotalHours();
  }
  });
  break;
  case 'IB-High':
  this._convertScore.getIBHighData().subscribe(res => {
  var ibhData = JSON.parse(res['_body']);
  if (exam.getScore() >= ibhData[exam.getName()]['scores'][0]){
  exam.setTranslatedCourse(ibhData[exam.getName()]['course']);
  exam.setTranslatedHours(ibhData[exam.getName()]['hours']);
  this._convertScore.addCourse(exam.getTranslatedCourse());
  console.log(this._convertScore.getCourses());
  } else {
  exam.setTranslatedCourse('SCORE DOES NOT TRANSLATE');
  exam.setTranslatedHours(0);
  }
  if (this._addExam.examArr.every(exam => exam.getTranslatedHours() != null)) {
  this._convertScore.calculateTotalHours();
  }
  });
  break;
  case 'IB-Standard':
  this._convertScore.getIBStandardData().subscribe(res => {
  var ibsData = JSON.parse(res['_body']);
  if (exam.getScore() >= ibsData[exam.getName()]['scores'][0]){
  exam.setTranslatedCourse(ibsData[exam.getName()]['course']);
  exam.setTranslatedHours(ibsData[exam.getName()]['hours']);
  this._convertScore.addCourse(exam.getTranslatedCourse());
  console.log(this._convertScore.getCourses());
  } else {
  exam.setTranslatedCourse('SCORE DOES NOT TRANSLATE');
  exam.setTranslatedHours(0);
  }
  if (this._addExam.examArr.every(exam => exam.getTranslatedHours() != null)) {
  this._convertScore.calculateTotalHours();
  }
  });
  break;
  case 'SAT':
  this._convertScore.getSATData().subscribe(res => {
  var satData = JSON.parse(res['_body']);
  if (exam.getScore() >= satData[exam.getName()]['scores'][0]){
  exam.setTranslatedCourse(satData[exam.getName()]['course']);
  exam.setTranslatedHours(satData[exam.getName()]['hours']);
  this._convertScore.addCourse(exam.getTranslatedCourse());
  console.log(this._convertScore.getCourses());
  } else {
  exam.setTranslatedCourse('SCORE DOES NOT TRANSLATE');
  exam.setTranslatedHours(0);
  }
  if (this._addExam.examArr.every(exam => exam.getTranslatedHours() != null)) {
  this._convertScore.calculateTotalHours();
  }
  });
  break;
  }
  this.toggleDisplayResults();
  });
  }
}
