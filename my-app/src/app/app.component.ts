import { Component } from '@angular/core';

import { ConvertScoreService } from './services/convert-score.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  constructor(private _convertScore: ConvertScoreService) { }
}
