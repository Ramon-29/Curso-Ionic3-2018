import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Confirmación',
      message: 'Quieres ir al listado de items?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            this.navCtrl.push(ListPage);
          }
        }
      ]
    });
    confirm.present();
  }
}
