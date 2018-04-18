import { Component, OnInit, Input, animate, trigger, state, style, transition } from '@angular/core';
import { Estados } from '../estados.enum';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  animations: [
    trigger("status", [
      state("current", style ({
        backgroundColor: "#1e8257",
        border: "6px solid white",
        boxShadow: "0 0 6px #1e8257"
      })),
      state("checked", style({
        backgroundColor: "#1e8257"
      })),
      state("notCurrent", style({
        backgroundColor: "#999999"
      })),
      transition("current <=> checked", [
        animate("1s")
      ])
    ])
  ]
})
export class StepperComponent implements OnInit {

  @Input () steps:Array<{text : string}>;

  currentStatus = Estados[1];
  checkedStatus = Estados[2];
  notChecked = Estados[0];

  public counter:number = 0;

  completeStep() {
    this.counter+=1;
  }

  constructor() { }

  ngOnInit() {
  }

}
