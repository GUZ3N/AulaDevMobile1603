import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-actionsheet',
  templateUrl: './actionsheet.page.html',
  styleUrls: ['./actionsheet.page.scss'],
})
export class ActionsheetPage implements OnInit {

  constructor(private actionSheetCtrl : ActionSheetController) { }

  ngOnInit() {
  }
  
  async actionsheet(){
    const actionSheetAlert = await this.actionSheetCtrl.create(
      {
        header: "Opção",
        cssClass: "my-custom-class",
        buttons: [{
          text: "Deletar",
          role: "destructive",
          icon: "trash",
          
          handler: () =>{
            console.log('DELETADO')
          }

        },{
          text: "Compartilhar",
          role: "destructive",
          icon: "share",
          
          handler: () =>{
            console.log('COMPARTILHADO')
          }
        },{
          text: "Rodando",
          icon: "caret-forward-circle",
          
          handler: () =>{
            console.log('RODANDO')
          }
        },{
          text: "Favorito",
          icon: "heart",
          
          handler: () =>{
            console.log('SALVO COMO FAVORITO')
          }
        }]
      }
    );
    await actionSheetAlert.present();
  }

}
