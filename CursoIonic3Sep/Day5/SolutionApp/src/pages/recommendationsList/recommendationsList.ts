import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Recommendation, RecommendationsService } from '../../services/recommendations';
import { Subscription } from 'rxjs/Subscription';
import { RecommendationDetailsPage } from '../recommendationDetails/recommendationDetails';

@Component({
  selector: 'page-recommendations-list',
  templateUrl: 'recommendationsList.html'
})
export class RecommendationsListPage implements OnInit, OnDestroy {

  private isLoading: boolean;
  private recommendations: [Recommendation];

  private recsSubscription: Subscription;

  constructor(private navCtrl: NavController,
              private recommendationsService: RecommendationsService) {

  }

  ngOnInit() {

    this.isLoading = true;

    this.recsSubscription = this.recommendationsService.getRecommendations()
      .subscribe((recommendations: [Recommendation]) => {

        this.recommendations = recommendations;
        this.isLoading = false;
      })
  }

  ngOnDestroy() {

    if(this.recsSubscription) {
      this.recsSubscription.unsubscribe();
    }
  }

  showDetails(recommendation: Recommendation) {

    this.navCtrl.push(RecommendationDetailsPage, {recommendation});
  }
}
