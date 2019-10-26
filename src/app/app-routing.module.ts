import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'game-selection', pathMatch: 'full' },
  { path: 'game-selection', loadChildren: './game-selection/game-selection.module#GameSelectionPageModule' },
  { path: 'players-creation/:name', loadChildren: './players-creation/players-creation.module#PlayersCreationPageModule' },
  { path: 'play/:key', loadChildren: './play/play.module#PlayPageModule' },
  { path: 'params/:key', loadChildren: './parameters/parameters.module#ParametersPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
