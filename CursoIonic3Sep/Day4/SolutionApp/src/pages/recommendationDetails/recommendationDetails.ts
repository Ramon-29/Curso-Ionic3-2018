import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Recommendation } from '../../services/recommendations';

@Component({
  selector: 'page-recommendation-details',
  templateUrl: 'recommendationDetails.html'
})
export class RecommendationDetailsPage implements OnInit {

  private recommendation: Recommendation;

  constructor(private navParams: NavParams) {

  }

  ngOnInit() {

    this.recommendation = this.navParams.get('recommendation');
  }
}
