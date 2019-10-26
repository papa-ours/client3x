import { Component, OnInit, ViewChild } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { ChoiceService } from '../choice.service';
import { Turn } from '../turn';
import { Choice } from '../choice';
import { ToastController } from '@ionic/angular';
import { PickingComponent } from '../picking/picking.component';

@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {
  private key: string;
  public pickingPhase: boolean;
  public turn: Turn;
  public results: Map<string, string>;
  @ViewChild(PickingComponent, {static: false}) private pickingComponent: PickingComponent;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private choiceService: ChoiceService,
    private toastController: ToastController,
  ) {
    this.pickingPhase = false;
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.key = params.key;
      this.getNextTurn();
    });
  }

  private async getNextTurn(): Promise<void> {
    this.turn = await this.choiceService.getNextTurn(this.key).toPromise();
    if (!this.turn) {
      this.getResults();
    }
  }

  private async getResults(): Promise<void> {
    this.results = await this.choiceService.getResults(this.key).toPromise();
  }

  private blocked(): string[] {
    const blocked: Choice[] = this.turn.choices.filter((choice: Choice) => choice.blocked);
    return blocked.map((choice: Choice) => choice.name);
  }

  public goToGameSelection(): void {
    this.router.navigateByUrl('game-selection')
      .catch((error: Error) => {
        console.error(error.message);
      });
  }

  public pickingMessage(): string {
    return 'Pick a choice';
  }

  public blockingMessage(): string {
    return 'Block ' + this.turn.numberOfBlocks + (this.turn.numberOfBlocks === 1 ? ' choice' : ' choices') + ' to ' + this.turn.picking;
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

  private async blockChoices(): Promise<void> {
    const blocked: string[] = this.blocked();
    if (blocked.length !== this.turn.numberOfBlocks) {
      throw Error('You must block exactly ' + this.turn.numberOfBlocks + ' choices');
    }

    await this.choiceService.block(this.key, this.blocked()).toPromise();
  }

  private async getPlayerChoices(): Promise<void> {
    const choices: void | Choice[] = await this.choiceService.getPlayerChoices(
      this.key, this.turn.picking).toPromise();

    if (typeof choices !== 'undefined') {
      this.turn.choices = choices;
    }
  }

  private async pickChoice(): Promise<void> {
    await this.choiceService.pick(
      this.key,
      this.turn.picking,
      this.pickingComponent.pickedChoice.name,
    ).toPromise();
  }

  public async submit(): Promise<void> {
    try {
      if (this.pickingPhase) {
        await this.pickChoice();
        await this.getNextTurn();
        this.pickingPhase = false;
      } else {
        await this.blockChoices();
        await this.getPlayerChoices();
        this.pickingPhase = true;
      }
    } catch (error) {
      this.showMessage(error.message);
    }
  }
}
