import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExampleItem, ExampleItemsService } from '../../services/exampleItems';
import { DetailsPage } from '../details/details';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit, OnDestroy {

  private isLoading: boolean;
  private items: [ExampleItem];

  private subscription: Subscription;

  constructor(private navCtrl: NavController,
              private exampleItemsService: ExampleItemsService) {

  }

  ngOnInit() {

    this.isLoading = true;

    this.subscription = this.exampleItemsService.getExampleItemsDelayed()
      .subscribe((items: [ExampleItem]) => {

        this.items = items;
        this.isLoading = false;
      });
  }

  ngOnDestroy() {

    this.subscription.unsubscribe();
  }

  itemTapped(event, item) {

    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }
}
