import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { Fruit, FruitsService } from '../../services/fruits';
import { ToastsService } from '../../services/toasts';

@Component({
  selector: 'page-fruit-details',
  templateUrl: 'fruitDetails.html'
})
export class FruitDetailsPage implements OnInit, OnDestroy {

  private fruit: Fruit;

  private isUpdating: boolean;
  private form: FormGroup;
  private saveSubscription: Subscription;

  constructor(private navParams: NavParams,
              private alertCtrl: AlertController,
              private fruitsService: FruitsService,
              private toastsService: ToastsService) {

  }

  ngOnInit() {

    this.fruit = this.navParams.get('fruit');

    this.isUpdating = false;

    this.form = new FormGroup({
      description: new FormControl(this.fruit.description, Validators.required)
    });
  }

  ngOnDestroy() {

    if(this.saveSubscription) {
      this.saveSubscription.unsubscribe();
    }
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

  submitForm() {

    this.isUpdating = true;
    const fruit = Object.assign({}, this.fruit, this.form.value);

    this.saveSubscription = this.fruitsService.saveFruit(fruit)
      .subscribe(() => {

        this.isUpdating = false;
        this.fruit = fruit;
        this.toastsService.showToast('Updated successfully');

      }, () => {

        this.isUpdating = false;
        this.toastsService.showToast('Error updating');
      });
  }
}
