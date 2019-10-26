import { Component, OnInit, Input } from '@angular/core';
import { Choice } from '../choice';

@Component({
  selector: 'app-picking',
  templateUrl: './picking.component.html',
  styleUrls: ['./picking.component.scss'],
})
export class PickingComponent implements OnInit {
  @Input() choices: Choice[];
  public pickedChoice: Choice;

  constructor() {}

  ngOnInit() {}

  public pick(choice: Choice): void {
    if (!choice.blocked) {
      this.pickedChoice = choice;
    }
  }

}
