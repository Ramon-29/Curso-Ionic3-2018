import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Fruit } from '../../services/example-fruits';

@Component({
  selector: 'page-detail-fruit',
  templateUrl: 'detail-fruit.html',
})

export class DetailFruitPage implements OnInit{

  public fruit: Fruit;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(): void {
    this.fruit = this.navParams.get('fruit');
  }

}
