import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../services/example-items';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})


export class DetailsPage implements OnInit {

  public exampleItem: Item;

  ngOnInit(): void {
    this.exampleItem = this.navParams.get('item');
    console.log(this.exampleItem);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }


}
