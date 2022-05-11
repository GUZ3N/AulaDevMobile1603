import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
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
  {
    path: 'home',
    loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'botao',
    loadChildren: () => import('./Pages/botao/botao.module').then( m => m.BotaoPageModule)
  },
  {
    path: 'botao2',
    loadChildren: () => import('./Pages/botao2/botao2.module').then( m => m.Botao2PageModule)
  },
  {
    path: 'botao3',
    loadChildren: () => import('./Pages/botao3/botao3.module').then( m => m.Botao3PageModule)
  },
  {
    path: 'botao4',
    loadChildren: () => import('./Pages/botao4/botao4.module').then( m => m.Botao4PageModule)
  },
  {
    path: 'botao5',
    loadChildren: () => import('./Pages/botao5/botao5.module').then( m => m.Botao5PageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'actionsheet',
    loadChildren: () => import('./pages/actionsheet/actionsheet.module').then( m => m.ActionsheetPageModule)
  },
  {
    path: 'badge',
    loadChildren: () => import('./pages/badge/badge.module').then( m => m.BadgePageModule)
  },
  {
    path: 'shows',
    loadChildren: () => import('./Pages/shows/shows.module').then( m => m.ShowsPageModule)
  },
  {
    path: 'participar',
    loadChildren: () => import('./Pages/participar/participar.module').then( m => m.ParticiparPageModule)
  },  {
    path: 'curso',
    loadChildren: () => import('./Pages/curso/curso.module').then( m => m.CursoPageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./pages/input/input.module').then( m => m.InputPageModule)
  },
  {
    path: 'infinitscroll',
    loadChildren: () => import('./pages/infinitscroll/infinitscroll.module').then( m => m.InfinitscrollPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
