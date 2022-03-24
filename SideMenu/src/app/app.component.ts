import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public appPages = [
    { title: 'View', url: '/folder/View', icon: 'eye' },
    { title: 'Relatório', url: '/folder/Relatório', icon: 'document-text' },
    { title: 'Comandos', url: '/folder/Comandos', icon: 'list' },
    { title: 'User', url: '/folder/User', icon: 'people-circle' },
    { title: 'Configurações', url: '/folder/Config', icon: 'settings' },
     
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
  
}
