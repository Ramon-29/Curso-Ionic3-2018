import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Fruit, ExampleFruitsService } from '../../services/example-fruits';
import { Subscription } from 'rxjs/Subscription';
import { DetailFruitPage } from '../detail-fruit/detail-fruit';

enum PageState {
  Loading,
  Error,
  Success
}

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage implements OnInit, OnDestroy {

  selectedFruit: any;
  icons: string[];
  fruits: Fruit[];

  isLoading: boolean = true;
  isError: boolean = false;

  private subscription: Subscription;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private exampleFruitsService: ExampleFruitsService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedFruit = navParams.get('fruit');

    this.exampleFruitsService = exampleFruitsService;
  }

  ngOnInit(): void {
    this.subscription = this.exampleFruitsService.getRemoteFruits()
      .subscribe((fruits: Fruit[]) => {
        this.fruits = fruits;
        this.isLoading = false;
        this.isError = false;
      }, () => {
        this.isLoading = false;
        this.isError = true;
        console.log('Error!');
      }
      );
  }

  retryLoad(){
    this.isLoading = true;
    this.isError = false;
    this.ngOnInit();
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.subscription.unsubscribe();
  }

  itemTapped(event, fruit) {
    this.navCtrl.push(DetailFruitPage, {
      fruit: fruit
    });
  }
}
