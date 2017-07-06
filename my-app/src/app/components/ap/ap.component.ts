import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ScoreSelectService } from '../../services/score-select.service';

@Component({
    selector: 'ap',
    templateUrl: 'ap.component.html',
    styleUrls: ['../../components/left-panel/left-panel.component.css']
})

export class APComponent implements OnInit {
  constructor(private _scoreSelect: ScoreSelectService) { }
  ngOnInit() {}
  public reset() {
   //Removing `data-toggle` from all elements
   $('.btn').removeData('toggle');
   //Adding `data-toggle` on clicked element
   $(this).data('toggle','button');
  }
  public resetClick() {
    $(".btn-group > .btn").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});
}
}
