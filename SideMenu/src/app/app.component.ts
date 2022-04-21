import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public appPages = [
    { title: 'HOME', url: '/home', icon: '' },
    { title: 'Botões', url: '/botao', icon: 'construct' },
    { title: 'Botões2', url: '/botao2', icon: 'construct' },
    { title: 'Botões3', url: '/botao3', icon: 'construct' },
    { title: 'Botões4', url: '/botao4', icon: 'construct' },
    { title: 'Botões5', url: '/botao5', icon: 'construct' },
    { title: 'Navegação', url: '/navegacao', icon: 'code' },
    { title: 'Navegação2', url: '/navegacao2', icon: 'code' },
    { title: 'Visualização', url: '/view', icon: 'eye' },
    { title: 'Relatório', url: '/relatorio', icon: 'document' },
    { title: 'Comando', url: '/comandos', icon: 'list' },
    { title: 'Administradores', url: '/user', icon: 'people-circle' },
    { title: 'Discord', url: '/discord', icon: '' },
    { title: 'Configurações', url: '/configuracoes', icon:'settings'},
    { title: 'Suporte', url: '/suporte', icon:'headset'},
    { title: 'RedeSocial', url: '/redesocial', icon:'earth'},
  ];

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}

  
}

