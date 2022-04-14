import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedesocialPageRoutingModule } from './redesocial-routing.module';

import { RedesocialPage } from './redesocial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedesocialPageRoutingModule
  ],
  declarations: [RedesocialPage]
})
export class RedesocialPageModule {}
