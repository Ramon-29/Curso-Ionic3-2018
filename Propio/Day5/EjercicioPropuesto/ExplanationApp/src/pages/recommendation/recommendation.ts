import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { ExampleRecommendationsService, Recommendation } from '../../services/example-recommendations';
import { DetailRecommendationPage } from '../detail-recommendation/detail-recommendation';

@Component({
  selector: 'recommendation',
  templateUrl: 'recommendation.html'
})

export class RecommendationPage implements OnInit, OnDestroy {

  selectedRecommendation: any;
  icons: string[];
  recommendations: Recommendation[];

  isLoading: boolean = true;
  isError: boolean = false;

  private subscription: Subscription;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private ExampleRecommendationsService: ExampleRecommendationsService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedRecommendation = navParams.get('recommendation');

    this.ExampleRecommendationsService = ExampleRecommendationsService;
  }

  ngOnInit(): void {
    this.subscription = this.ExampleRecommendationsService.getRemoteRecommendations()
      .subscribe((recommendations: Recommendation[]) => {
        this.recommendations = recommendations;
        this.isLoading = false;
        this.isError = false;
      }, () => {
        this.isLoading = false;
        this.isError = true;
        console.log('Error!');
      });
  }

  retryLoad() {
    this.isLoading = true;
    this.isError = false;
    this.ngOnInit();
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.subscription.unsubscribe();
  }

  itemTapped(event, recommendation) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(DetailRecommendationPage, {
      recommendation: recommendation
    });
  }
}
