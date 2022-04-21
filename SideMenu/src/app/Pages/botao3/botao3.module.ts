import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Botao3PageRoutingModule } from './botao3-routing.module';

import { Botao3Page } from './botao3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Botao3PageRoutingModule
  ],
  declarations: [Botao3Page]
})
export class Botao3PageModule {}
