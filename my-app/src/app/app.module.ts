
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftPanelComponent } from './components/left-panel/left-panel.component';
import { RightPanelComponent } from './components/right-panel/right-panel.component';
import { ScoreSelectService } from './services/score-select.service';
import { AddExamService } from './services/add-exam.service';
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftPanelComponent,
    RightPanelComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [
    ScoreSelectService,
    AddExamService
  ],
  bootstrap: [
    AppComponent,
    RightPanelComponent,
    LeftPanelComponent
  ]
})

export class AppModule { }
