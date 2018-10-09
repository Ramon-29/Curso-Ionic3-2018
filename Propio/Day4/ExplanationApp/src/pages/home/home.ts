import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from '../../services/config';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit {

  private str: string;

  constructor(public navCtrl: NavController,
    private configService: ConfigService,
    private translateService: TranslateService) {

  }

  ngOnInit(): void {
    this.configService.langLoaded.subscribe( () => {
      this.str = this.translateService.instant('home.hello');
    });
  }

}
