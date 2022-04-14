import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'navegacao',
    loadChildren: () => import('./Pages/navegacao/navegacao.module').then( m => m.NavegacaoPageModule)
  },
  {
    path: 'navegacao2',
    loadChildren: () => import('./Pages/navegacao2/navegacao2.module').then( m => m.Navegacao2PageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./Pages/view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'relatorio',
    loadChildren: () => import('./pages/relatorio/relatorio.module').then( m => m.RelatorioPageModule)
  },
  {
    path: 'comandos',
    loadChildren: () => import('./pages/comandos/comandos.module').then( m => m.ComandosPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./pages/configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },
  {
    path: 'discord',
    loadChildren: () => import('./Pages/discord/discord.module').then( m => m.DiscordPageModule)
  },
  {
    path: 'suporte',
    loadChildren: () => import('./Pages/suporte/suporte.module').then( m => m.SuportePageModule)
  },
  {
    path: 'redesocial',
    loadChildren: () => import('./Pages/redesocial/redesocial.module').then( m => m.RedesocialPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
