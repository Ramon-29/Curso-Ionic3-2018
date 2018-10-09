import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Recommendation, ExampleRecommendationsService } from '../../services/example-recommendations';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { ToastService } from '../../services/toast';

@Component({
  selector: 'page-detail-recommendation',
  templateUrl: 'detail-recommendation.html',
})

export class DetailRecommendationPage implements OnInit {

  public recommendation: Recommendation;
  public form: FormGroup;

  isLoading: boolean = false;
  isError: boolean = false;
  private subscription: Subscription;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private exampleRecomendationsService: ExampleRecommendationsService,
    private toastService: ToastService) {

    this.exampleRecomendationsService = exampleRecomendationsService;
  }

  ngOnInit(): void {
    this.recommendation = this.navParams.get('recommendation');
    this.form = this.formBuilder.group({
      title: [this.recommendation.title],
      content: [this.recommendation.content],
      author: [this.recommendation.author],
    });
  }

  formRecommendationDetailSubmitted() {
    this.isLoading = true;

    this.recommendation.title = this.form.value.title;
    this.recommendation.content = this.form.value.content;
    this.recommendation.author = this.form.value.author;

    this.subscription = this.exampleRecomendationsService.updateRecommendation(this.recommendation)
      .subscribe( () => {
        this.isLoading = false;
        this.isError = false;
        this.toastService.showToast(true,`Actualización realizada con éxito sobre ${this.recommendation.title}`);
      }, () => {
        this.isLoading = false;
        this.isError = true;
        this.toastService.showToast(false,`Actualización realizada con éxito sobre ${this.recommendation.title}`);
      });
  }

}
