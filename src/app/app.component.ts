import {Component} from '@angular/core';
import {NgbAlertConfig, NgbConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WAPRO ERP';

  constructor(ngbConfig: NgbConfig, ngbAlertConfig: NgbAlertConfig) {
    ngbConfig.animation = false;
    ngbAlertConfig.animation = false;
  }

}
