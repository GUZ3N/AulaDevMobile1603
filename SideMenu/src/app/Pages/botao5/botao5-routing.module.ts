import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Botao5Page } from './botao5.page';

const routes: Routes = [
  {
    path: '',
    component: Botao5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Botao5PageRoutingModule {}
