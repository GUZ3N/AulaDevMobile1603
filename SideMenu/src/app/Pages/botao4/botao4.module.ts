import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Botao4PageRoutingModule } from './botao4-routing.module';

import { Botao4Page } from './botao4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Botao4PageRoutingModule
  ],
  declarations: [Botao4Page]
})
export class Botao4PageModule {}
