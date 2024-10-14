import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeammemberPageRoutingModule } from './teammember-routing.module';

import { TeammemberPage } from './teammember.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeammemberPageRoutingModule
  ],
  declarations: [TeammemberPage]
})
export class TeammemberPageModule {}
