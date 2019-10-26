import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit, Game {
  @Input() public name: string;
  @Input() public maxPlayers: number;
  constructor() { }

  ngOnInit() {}

}
