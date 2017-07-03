import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
declare var $:JQueryStatic;

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.css']
})

export class HeaderComponent {
    loadDisclaimer() {
        $(".modal-body").load("disclaimer.txt", function(){
            alert("Done Loading");
        });
    }
}

export class NgbdDropdownBasic { }
