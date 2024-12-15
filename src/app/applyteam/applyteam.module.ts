import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplyteamPageRoutingModule } from './applyteam-routing.module';

import { ApplyTeamPage } from './applyteam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplyteamPageRoutingModule
  ],
  declarations: [ApplyTeamPage]
})
export class ApplyteamPageModule {}
