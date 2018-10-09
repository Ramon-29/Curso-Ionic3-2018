import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Fruit, FruitsService } from '../../services/fruits';
import { Subscription } from 'rxjs/Subscription';
import { FruitDetailsPage } from '../fruitDetails/fruitDetails';

@Component({
  selector: 'page-fruits-list',
  templateUrl: 'fruitsList.html'
})
export class FruitsListPage implements OnInit, OnDestroy {

  private isLoading: boolean;
  private fruits: [Fruit];

  private fruitsSubscription: Subscription;

  constructor(private navCtrl: NavController,
              private fruitsService: FruitsService) {

  }

  ngOnInit() {

    this.isLoading = true;

    this.fruitsSubscription = this.fruitsService.getFruits()
      .subscribe((fruits: [Fruit]) => {

        this.fruits = fruits;
        this.isLoading = false;
      })
  }

  ngOnDestroy() {

    this.fruitsSubscription.unsubscribe();
  }

  showDetails(fruit: Fruit) {

    this.navCtrl.push(FruitDetailsPage, {fruit});
  }
}
