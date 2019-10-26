import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ChoiceService } from '../choice.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.page.html',
  styleUrls: ['./parameters.page.scss'],
})
export class ParametersPage implements OnInit {
  private key: string;
  public numberOfChoices: number;
  public numberOfBlocks: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private choiceService: ChoiceService,
    private toastController: ToastController,
  ) {
    this.numberOfChoices = 3;
    this.numberOfBlocks = 1;
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.key = params.key;
    });
  }

  public goToGameSelection(): void {
    this.router.navigateByUrl('game-selection')
      .catch((error: Error) => {
        console.error(error.message);
      });
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

  public sendParameters(): void {
    this.choiceService.sendParameters(this.key, this.numberOfChoices, this.numberOfBlocks)
      .subscribe((response: string | boolean) => {
        if (typeof response === 'string') {
          this.showMessage(response);
        } else {
          this.goToPlayPage();
        }
      });
  }

  private goToPlayPage(): void {
    this.router.navigateByUrl('play/' + this.key)
      .catch((error: Error) => {
        console.error(error.message);
      });
  }
}
