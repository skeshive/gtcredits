import { Component } from '@angular/core';

export class Exam {
  private name: string;
  private score: number;
  private type: string;

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

  public setName(name: string) {
    this.name = name;
  }

  public setScore(score:number) {
    this.score = score;
  }

  public setType(type: string) {
    this.type = type;
  }
}
