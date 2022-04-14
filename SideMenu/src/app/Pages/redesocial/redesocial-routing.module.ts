import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedesocialPage } from './redesocial.page';

const routes: Routes = [
  {
    path: '',
    component: RedesocialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedesocialPageRoutingModule {}
