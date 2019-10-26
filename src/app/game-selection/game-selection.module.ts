import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GameSelectionPage } from './game-selection.page';
import { GameComponent } from '../game/game.component';
import { GameService } from '../game.service';

const routes: Routes = [
  {
    path: '',
    component: GameSelectionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  providers: [GameService],
  declarations: [GameSelectionPage, GameComponent],
})
export class GameSelectionPageModule {}
