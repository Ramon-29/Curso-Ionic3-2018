import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { ExampleRecommendationsService, Recommendation } from '../../services/example-recommendations';
import { DetailRecommendationPage } from '../detail-recommendation/detail-recommendation';

@Component({
  selector: 'recommendation',
  templateUrl: 'recommendation.html'
})

export class RecommendationPage implements OnInit, OnDestroy{
 
  selectedRecommendation: any;
  icons: string[];
  recommendations: Recommendation[];

  isLoading: boolean = true;

  private subscription: Subscription;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private ExampleRecommendationsService: ExampleRecommendationsService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedRecommendation = navParams.get('recommendation');

    this.ExampleRecommendationsService = ExampleRecommendationsService;
  }

  ngOnInit(): void {
    this.subscription = this.ExampleRecommendationsService.getExampleRecommendationsDelayed()
      .subscribe((recommendations: Recommendation[]) => {
        this.recommendations = recommendations;
        this.isLoading = false;
      });
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.subscription.unsubscribe();
  }

  itemTapped(event, recommendation) {
    // That's right, we're pushing to ourselves!

    console.log(recommendation);
    this.navCtrl.push(DetailRecommendationPage, {
      recommendation: recommendation
    });
  }
}
