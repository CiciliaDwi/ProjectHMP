import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplyTeamPage } from './applyteam.page';
import { NewapplyteamPage } from '../newapplyteam/newapplyteam.page';

const routes: Routes = [
  {
    path: '',
    component: ApplyTeamPage
  },
  {
    path: 'newapplyteam',
    component: NewapplyteamPage // Halaman yang ingin kamu tuju
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplyteamPageRoutingModule {}
