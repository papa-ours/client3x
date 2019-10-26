import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  public name: string;
  @Input() public number: number;
  @Output() public nameEntered: EventEmitter<string>;

  constructor() {
    this.name = '';
    this.nameEntered = new EventEmitter<string>();
  }

  ngOnInit() {}
}
