import { Component, OnInit, Input } from '@angular/core';
import { Choice } from '../choice';

@Component({
  selector: 'app-blocking',
  templateUrl: './blocking.component.html',
  styleUrls: ['./blocking.component.scss'],
})
export class BlockingComponent implements OnInit {
  @Input() choices: Choice[];
  @Input() numberOfBlocks: number;
  constructor() { }

  ngOnInit() {}

  private blocked(): Choice[] {
    return this.choices.filter((choice: Choice) => choice.blocked);
  }

  public toggle(index: number): void {
    const blocked: Choice[] = this.blocked();
    if (!this.choices[index].blocked && blocked.length >= this.numberOfBlocks) {
      const firstBlockedIndex: number = this.choices.findIndex((choice: Choice) => choice.name === blocked[0].name);
      this.choices[firstBlockedIndex].blocked = false;
    }
    this.choices[index].blocked = !this.choices[index].blocked;
  }
}
