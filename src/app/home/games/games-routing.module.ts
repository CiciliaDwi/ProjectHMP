import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesPage } from './games.page';

const routes: Routes = [
  {
    path: '',
    component: GamesPage
  },
  {
    path: 'achievement/:gameTitle',
    loadChildren: () => import('./achievement/achievement.module').then( m => m.AchievementPageModule)
  },
  {
    path: 'teamdetails',
    loadChildren: () => import('./teamdetails/teamdetails.module').then( m => m.TeamdetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesPageRoutingModule {}
