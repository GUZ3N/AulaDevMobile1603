import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscordPageRoutingModule } from './discord-routing.module';

import { DiscordPage } from './discord.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscordPageRoutingModule
  ],
  declarations: [DiscordPage]
})
export class DiscordPageModule {}
