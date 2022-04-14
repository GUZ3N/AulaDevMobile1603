import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public appPages = [
    { title: 'Navegação', url: '/navegacao', icon: 'code' },
    { title: 'Navegação2', url: '/navegacao2', icon: 'code' },
    { title: 'Visualização', url: '/view', icon: 'eye' },
    { title: 'Relatório', url: '/relatorio', icon: 'document' },
    { title: 'Comando', url: '/comandos', icon: 'list' },
    { title: 'Administradores', url: '/user', icon: 'people-circle' },
    { title: 'Discord', url: '/discord', icon: '' },
    { title: 'Configurações', url: '/configuracoes', icon:'settings'},
    { title: 'Suporte', url: '/suporte', icon:'code'},
    { title: 'RedeSocial', url: '/redesocial', icon:'code'},
  ];

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}

  
}

