import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeammemberPage } from './teammember.page';

const routes: Routes = [
  {
    path: '',
    component: TeammemberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeammemberPageRoutingModule {}
