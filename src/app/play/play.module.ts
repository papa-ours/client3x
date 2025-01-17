import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlayPage } from './play.page';
import { BlockingComponent } from '../blocking/blocking.component';
import { PickingComponent } from '../picking/picking.component';

const routes: Routes = [
  {
    path: '',
    component: PlayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PlayPage,
    BlockingComponent,
    PickingComponent,
  ]
})
export class PlayPageModule {}
