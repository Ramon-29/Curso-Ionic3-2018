import { Component } from '@angular/core';
import { ListPage } from '../list/list';
import { AlertController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController,
              private alertCtrl: AlertController) {

  }

  navigateToList() {

    let prompt = this.alertCtrl.create({

      title: 'Navigate to list',
      message: 'Are you sure you wnat to navigate to the list page?',
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'OK',
          handler: data => {
            this.navCtrl.push(ListPage);
          }
        }
      ]
    });

    prompt.present();
  }
}
