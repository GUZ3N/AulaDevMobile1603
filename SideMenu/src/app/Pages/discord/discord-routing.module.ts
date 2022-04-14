import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscordPage } from './discord.page';

const routes: Routes = [
  {
    path: '',
    component: DiscordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscordPageRoutingModule {}
