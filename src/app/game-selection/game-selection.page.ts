import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-selection',
  templateUrl: './game-selection.page.html',
  styleUrls: ['./game-selection.page.scss'],
})
export class GameSelectionPage implements OnInit {

  public games: Game[];
  constructor(
    private gameService: GameService,
    private router: Router
  ) {}

  ngOnInit() {
    this.gameService.getGames().subscribe((games: Game[]) => {
      this.games = games;
    });
  }

  public selectGame(gameName: string): void {
    this.router.navigateByUrl(`players-creation/${gameName}`)
      .catch((error: Error) => {
        console.error(error.message);
      });
  }

}
