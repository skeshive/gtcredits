import { Component } from '@angular/core';

export class Exam {
  private name: string;
  private score: number;
  private type: string;
  private index: number;
  private translatedCourse: string = null;
  private translatedHours: number = null;
  private exceptionArray: string[] = [];

  constructor() { }

  private getName(): string {
    return this.name;
  }

  private getScore(): number {
    return this.score;
  }

  private getType(): string {
    return this.type;
  }

  private getIndex(): number {
    return this.index;
  }

  private getTranslatedCourse(): string {
    return this.translatedCourse;
  }

  private getTranslatedHours(): number {
    return this.translatedHours;
  }

  private getExceptionArray(): string[] {
    return this.exceptionArray;
  }

  private setName(name: string) {
    this.name = name;
  }

  private setScore(score:number) {
    this.score = score;
  }

  private setType(type: string) {
    this.type = type;
  }

  private setIndex(index: number) {
    this.index = index;
  }

  private setTranslatedCourse(translatedCourse: string) {
    this.translatedCourse = translatedCourse;
  }

  private setTranslatedHours(translatedHours: number) {
    this.translatedHours = translatedHours;
  }

  private setExceptionArray(exceptionArray: string[]) {
    this.exceptionArray = exceptionArray;
  }
}
