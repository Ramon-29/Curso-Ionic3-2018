import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Item, ExampleItemsService } from '../../services/example-items';
import { DetailsPage } from '../details/details';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit,OnDestroy {
 
  selectedItem: any;
  icons: string[];
  items: Item[];

  private subscription: Subscription;

  isLoading: boolean = true;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private exampleItemsService: ExampleItemsService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.exampleItemsService = exampleItemsService;
  }

  ngOnInit() {
    this.isLoading = true;
    this.subscription = this.exampleItemsService.getExampleItemsDelayed()
    .subscribe((items: Item[]) => {
      this.items = items;
      this.isLoading = false;
    });
    
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.subscription.unsubscribe();
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }

}
