import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Botao2PageRoutingModule } from './botao2-routing.module';

import { Botao2Page } from './botao2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Botao2PageRoutingModule
  ],
  declarations: [Botao2Page]
})
export class Botao2PageModule {}
