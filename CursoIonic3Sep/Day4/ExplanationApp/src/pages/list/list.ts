import { Component, OnDestroy, OnInit } from '@angular/core';
import { Fruit, FruitsService } from '../../services/fruits';
import { Subscription } from 'rxjs/Subscription';

enum PageState {
  Loading,
  Ready,
  LoadingError
}

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit, OnDestroy {

  private PageState = PageState;
  private pageState: PageState;

  private fruits: [Fruit];

  private subscription: Subscription;

  constructor(private fruitsService: FruitsService) {

  }

  ngOnInit() {

    this.loadFruitsList();
  }

  ngOnDestroy() {

    this.subscription.unsubscribe();
  }

  loadFruitsList() {

    this.pageState = PageState.Loading;

    this.subscription = this.fruitsService.getFruits()
      .subscribe((fruits: [Fruit]) => {

        this.fruits = fruits;
        this.pageState = PageState.Ready;

      }, () => {

        this.pageState = PageState.LoadingError;
      });
  }
}
