import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Fruit, ExampleFruitsService } from '../../services/example-fruits';
import { Subscription } from 'rxjs/Subscription';
import { DetailFruitPage } from '../detail-fruit/detail-fruit';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage implements OnInit, OnDestroy{
 
  selectedFruit: any;
  icons: string[];
  fruits: Fruit[];

  isLoading: boolean = true;

  private subscription: Subscription;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private exampleFruitsService: ExampleFruitsService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedFruit = navParams.get('fruit');

    this.exampleFruitsService = exampleFruitsService;
  }

  ngOnInit(): void {
    this.subscription = this.exampleFruitsService.getExampleFruitsDelayed()
      .subscribe((fruits: Fruit[]) => {
        this.fruits = fruits;
        this.isLoading = false;
      });
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
