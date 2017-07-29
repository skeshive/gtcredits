import { Component } from '@angular/core';

export class Exam {
  public name: string;
  public score: number;
  public type: string;
  public index: number;
  public translatedCourse: string = null;
  public translatedHours: number = null;
  public exceptionArray: string[] = [];

  constructor() { }

  public getName(): string {
    return this.name;
  }

  public getScore(): number {
    return this.score;
  }

  public getType(): string {
    return this.type;
  }

  public getIndex(): number {
    return this.index;
  }

  public getTranslatedCourse(): string {
    return this.translatedCourse;
  }

  public getTranslatedHours(): number {
    return this.translatedHours;
  }

  public getExceptionArray(): string[] {
    return this.exceptionArray;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setScore(score:number) {
    this.score = score;
  }

  public setType(type: string) {
    this.type = type;
  }

  public setIndex(index: number) {
    this.index = index;
  }

  public setTranslatedCourse(translatedCourse: string) {
    this.translatedCourse = translatedCourse;
  }

  public setTranslatedHours(translatedHours: number) {
    this.translatedHours = translatedHours;
  }

  public setExceptionArray(exceptionArray: string[]) {
    this.exceptionArray = exceptionArray;
  }
}
