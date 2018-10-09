import { Component, OnInit } from '@angular/core';
import { AlertController, NavParams } from 'ionic-angular';
import { Fruit } from '../../services/fruits';

@Component({
  selector: 'page-fruit-details',
  templateUrl: 'fruitDetails.html'
})
export class FruitDetailsPage implements OnInit {

  private fruit: Fruit;

  constructor(private navParams: NavParams,
              private alertCtrl: AlertController) {

  }

  ngOnInit() {

    this.fruit = this.navParams.get('fruit');
  }

  voteSubmitted(isPositive: boolean) {

    const opinionType = isPositive ? 'positive' : 'negative';

    let prompt = this.alertCtrl.create({
      title: 'Thanks for voting',
      message: `Thanks for giving a ${opinionType} opinion about ${this.fruit.name} fruit`,
      buttons: [{text: 'OK'}]
    });

    prompt.present();
  }
}
