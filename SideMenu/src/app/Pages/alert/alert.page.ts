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
      header: "REMOVER",
      subHeader: "REMOVIDO?",
      message: "usuario foi removio!! :( (mentira kkkkk)",
      buttons: ['OK']
    });
    await alert.present();
  }
  async add(){
    const alert = await this.alertCtrl.create({
      cssClass: "my-custom-class",
      header: "ADICIONAR",
      subHeader: "Adicionado?",
      message: "Coloca as infos ai:",
      inputs: [{
        name: "Nome",
        placeholder: "Nome do individuo"
      },{
        name: "Sobrenome",
        placeholder: "Sobrenome do cara",
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
      message: "Edita o nome ai",
      inputs: [{
        name: "Nome",
        placeholder: "Nome do individuo"
      },{
        name: "Sobrenome",
        placeholder: "Sobrenome do cara",
      }],
      buttons: ['editar']
    });
    await alert.present();
  }

}
