import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Botao3Page } from './botao3.page';

const routes: Routes = [
  {
    path: '',
    component: Botao3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Botao3PageRoutingModule {}
