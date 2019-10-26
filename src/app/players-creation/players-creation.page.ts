import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../game';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-players-creation',
  templateUrl: './players-creation.page.html',
  styleUrls: ['./players-creation.page.scss'],
})
export class PlayersCreationPage implements OnInit {
  public game: Game;
  public playerNames: string[];

  constructor(
    private toastController: ToastController,
    private playerService: PlayerService,
    private gameService: GameService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.playerNames = ['', ''];
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.gameService.getGame(params.name).subscribe((game: Game) => {
        this.game = game;
      });
    });
  }

  public goToGameSelection(): void {
    this.router.navigateByUrl('game-selection')
      .catch((error: Error) => {
        console.error(error.message);
      });
  }

  public addPlayer(): void {
    this.playerNames.push('');
  }

  public removePlayer(): void {
    this.playerNames.pop();
  }

  private async validatePlayerName(name: string): Promise<void> {
    if (name.length === 0) {
      throw Error('Player\'s name cannot be empty');
    }

    const validation: string | boolean = await this.playerService.getNameValidation(name);
    if (typeof validation === 'string') {
      throw Error(validation);
    }
  }

  private async showMessage(message: string): Promise<void> {
    const toast = await this.toastController.create({
      header: message,
      duration: 3000,
      position: 'top',
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
        }
      ],
    });
    toast.present();
  }

  private async validatePlayerNames(event: Event): Promise<string[]> {
    const names: string[] = [];
    return Promise.all(
      this.playerNames.map(async (_: string, index: number) => {
        const name: string = event.target['player' + (index + 1)].value;
        await this.validatePlayerName(name);
        if (names.indexOf(name) >= 0) {
          throw Error('Player names must be unique');
        }
        names.push(name);

        return name;
      })
    );
  }

  public async confirmPlayers(event: Event): Promise<void> {
    try {
      this.playerNames = await this.validatePlayerNames(event);
      this.sendPlayers();
    } catch (error) {
      this.showMessage(error.message);
    }
  }

  private goToParametersPage(key: string): void {
    this.router.navigateByUrl('params/' + key)
      .catch((error: Error) => {
        console.error(error.message);
      });
  }

  private sendPlayers(): void {
    this.playerService.sendPlayers(this.game.name, this.playerNames).subscribe((key: string) => {
      this.goToParametersPage(key);
    });
  }
}
