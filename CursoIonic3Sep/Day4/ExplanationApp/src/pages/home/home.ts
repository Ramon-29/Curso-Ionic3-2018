import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private translatedString: string;
  private paramTranslatedString: string;

  constructor(private translate: TranslateService) {

  }

  ionViewDidEnter() {

    this.translatedString = this.translate.instant('usingInstant');

    this.paramTranslatedString = this.translate.instant('parametrized', {
      name: 'world'
    });
  }
}
