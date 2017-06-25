import { Component } from '@angular/core';

export class Exam {
  private name: string;
  private score: number;
  private type: string;

  constructor(name, score, type) {
    this.name = name;
    this.score = score;
    this.type = type;
  }

  public getName(): string {
    return this.name;
  }

  public getScore(): number {
    return this.score;
  }

  public getType(): string {
    return this.type;
  }
}
