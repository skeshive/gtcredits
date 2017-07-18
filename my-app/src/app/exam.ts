import { Component } from '@angular/core';

export class Exam {
  private name: string;
  private score: number;
  private type: string;
  private index: number;
  private translatedCourse: string = null;
  private translatedHours: number = null;
  private duplicateCourseExists: boolean = false;

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

  public getDuplicateCourseExists(): boolean {
    return this.duplicateCourseExists;
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

  public setDuplicateCourseExists(duplicateCourseExists: boolean) {
    this.duplicateCourseExists = duplicateCourseExists;
  }
}
