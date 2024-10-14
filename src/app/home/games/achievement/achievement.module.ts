import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AchievementPageRoutingModule } from './achievement-routing.module';

import { AchievementPage } from './achievement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AchievementPageRoutingModule
  ],
  declarations: [AchievementPage]
})
export class AchievementPageModule {}

// Di dalam file achievement.model.ts (buat file ini jika belum ada)
export interface Achievement {
  url: string;
  description: string;
  year: number;
  team: string;
  game: string;
}

