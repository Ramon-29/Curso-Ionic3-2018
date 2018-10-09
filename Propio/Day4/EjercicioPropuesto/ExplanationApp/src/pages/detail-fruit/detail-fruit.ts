import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Fruit } from '../../services/example-fruits';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-detail-fruit',
  templateUrl: 'detail-fruit.html',
})

export class DetailFruitPage implements OnInit {

  public fruit: Fruit;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController) {
  }

  ngOnInit(): void {
    this.fruit = this.navParams.get('fruit');
  }

  presentToast(vote: boolean, fruit: Fruit) {
    let toast = this.toastCtrl.create({
      duration: 3000,
      position: 'bottom',
      cssClass: 'GreenToast',
    });

    if (vote === true) {
      toast.setMessage(`Votación positiva realizada con éxito sobre ${fruit.name}`);
      toast.setCssClass('GreenToast');
    } else {
      toast.setMessage(`Votación negativa realizada con éxito sobre ${fruit.name}`);
      toast.setCssClass('RedToast');
    }

 

    toast.present();
  }

}
