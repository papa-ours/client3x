import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlayersCreationPage } from './players-creation.page';
import { PlayerComponent } from '../player/player.component';

const routes: Routes = [
  {
    path: '',
    component: PlayersCreationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    PlayersCreationPage,
    PlayerComponent,
  ],
})
export class PlayersCreationPageModule {}
