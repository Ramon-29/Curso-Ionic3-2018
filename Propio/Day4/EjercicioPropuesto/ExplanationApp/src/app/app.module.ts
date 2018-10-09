import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ExampleFruitsService } from '../services/example-fruits';
import { RecommendationPage } from '../pages/recommendation/recommendation';
import { ExampleRecommendationsService } from '../services/example-recommendations';
import { lettersToCutPipe } from '../pipes/lettersToCut-pipe';
import { DetailFruitPage } from '../pages/detail-fruit/detail-fruit';
import { DetailRecommendationPage } from '../pages/detail-recommendation/detail-recommendation';
import { RatingComponent } from '../pages/components/rating/rating';
import { HttpClientModule } from '@angular/common/http';

import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RecommendationPage,
    lettersToCutPipe,
    DetailFruitPage,
    DetailRecommendationPage,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RecommendationPage,
    DetailFruitPage,
    DetailRecommendationPage,
    RatingComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ExampleFruitsService,
    ExampleRecommendationsService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
