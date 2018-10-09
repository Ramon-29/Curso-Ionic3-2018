import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ExampleItem } from '../../services/exampleItems';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage implements OnInit {

  private exampleItem: ExampleItem;

  private currency: string;

  constructor(private navParams: NavParams) {

  }

  ngOnInit() {

    this.exampleItem = this.navParams.get('item');

    this.currency = 'euro';
  }
}
