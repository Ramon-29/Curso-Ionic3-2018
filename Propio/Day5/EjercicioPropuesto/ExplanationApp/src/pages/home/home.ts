import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { RecommendationPage } from '../recommendation/recommendation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  redirectToFruits(){
    this.navCtrl.push(ListPage);
  }

  redirectTorecommendations(){
    this.navCtrl.push(RecommendationPage);
  }

}
