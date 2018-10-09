import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Recommendation } from '../../services/example-recommendations';

@Component({
  selector: 'page-detail-recommendation',
  templateUrl: 'detail-recommendation.html',
})

export class DetailRecommendationPage implements OnInit{

  public recommendation: Recommendation;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(): void {
    this.recommendation = this.navParams.get('recommendation');
  }
  

}
