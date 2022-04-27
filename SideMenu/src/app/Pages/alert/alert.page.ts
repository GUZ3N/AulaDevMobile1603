import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl : AlertController) { }

  ngOnInit() {
  }

  async remove(){
    const alert = await this.alertCtrl.create({
      cssClass: "my-custom-class",
      header: "REMOVER USUÁRIO",
      subHeader: "REMOVER?",
      message: "usuario removio!",
      buttons: ['OK']
    });
    await alert.present();
  }
  async add(){
    const alert = await this.alertCtrl.create({
      cssClass: "my-custom-class",
      header: "ADICIONAR",
      subHeader: "Adicionado?",
      message: "Adicione as informações:",
      inputs: [{
        name: "Nome",
        placeholder: "Adicionar nome"
      },{
        name: "Sobrenome",
        placeholder: "Adicionar sobrenome",
      }],
      buttons: ['Adicionar']
    });
    await alert.present();
  }
  async edit(){
    const alert = await this.alertCtrl.create({
      cssClass: "my-custom-class",
      header: "EDITAR",
      subHeader: "Editado?",
      message: "Edite o nome",
      inputs: [{
        name: "Nome",
        placeholder: "Editar nome"
      },{
        name: "Sobrenome",
        placeholder: "Editar sobrenome",
      }],
      buttons: ['editar']
    });
    await alert.present();
  }

}
