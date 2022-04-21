import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Botao5PageRoutingModule } from './botao5-routing.module';

import { Botao5Page } from './botao5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Botao5PageRoutingModule
  ],
  declarations: [Botao5Page]
})
export class Botao5PageModule {}
