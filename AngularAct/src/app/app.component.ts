import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  steps:Array<{text:string}>;

  constructor() {
    this.steps = [
      {text : "Business Information"},
      {text : "Owner Information"}
    ];
  }
}
