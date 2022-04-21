import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Botao2Page } from './botao2.page';

const routes: Routes = [
  {
    path: '',
    component: Botao2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Botao2PageRoutingModule {}
