import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamdetailsPage } from './teamdetails.page';

const routes: Routes = [
  {
    path: '',
    component: TeamdetailsPage
  },
  {
    path: 'teammember',
    loadChildren: () => import('./teammember/teammember.module').then( m => m.TeammemberPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamdetailsPageRoutingModule {}
