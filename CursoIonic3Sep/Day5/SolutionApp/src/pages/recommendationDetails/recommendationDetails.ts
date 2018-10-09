import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { Recommendation, RecommendationsService } from '../../services/recommendations';
import {ToastsService} from '../../services/toasts';

@Component({
  selector: 'page-recommendation-details',
  templateUrl: 'recommendationDetails.html'
})
export class RecommendationDetailsPage implements OnInit, OnDestroy {

  private recommendation: Recommendation;

  private isUpdating: boolean;
  private form: FormGroup;
  private saveSubscription: Subscription;

  constructor(private navParams: NavParams,
              private recsService: RecommendationsService,
              private toastsService: ToastsService) {

  }

  ngOnInit() {

    this.recommendation = this.navParams.get('recommendation');

    this.isUpdating = false;

    this.form = new FormGroup({
      title: new FormControl(this.recommendation.title, Validators.required),
      content: new FormControl(this.recommendation.content, Validators.required),
      author: new FormControl(this.recommendation.author, Validators.required),
    });
  }

  ngOnDestroy() {

    if(this.saveSubscription) {
      this.saveSubscription.unsubscribe();
    }
  }

  submitForm() {

    this.isUpdating = true;
    const recommendation = Object.assign({}, this.recommendation, this.form.value);

    this.saveSubscription = this.recsService.saveRecommendation(recommendation)
      .subscribe(() => {

        this.isUpdating = false;
        this.recommendation = recommendation;
        this.toastsService.showToast('Updated successfully');

      }, () => {

        this.isUpdating = false;
        this.toastsService.showToast('Error updating');
      });
  }
}
