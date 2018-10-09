import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FruitDetailsPage } from '../pages/fruitDetails/fruitDetails';
import { FruitsListPage } from '../pages/fruitsList/fruitsList';
import { RecommendationDetailsPage } from '../pages/recommendationDetails/recommendationDetails';
import { RecommendationsListPage } from '../pages/recommendationsList/recommendationsList';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FruitsService } from '../services/fruits';
import { RecommendationsService } from '../services/recommendations';
import { CommonNavbarComponent } from '../components/commonNavbar/commonNavbar';
import { RatingComponent } from '../components/rating/rating';
import { CutStringPipe } from '../pipes/cutString';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FruitDetailsPage,
    FruitsListPage,
    RecommendationDetailsPage,
    RecommendationsListPage,
    CommonNavbarComponent,
    RatingComponent,
    CutStringPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FruitDetailsPage,
    FruitsListPage,
    RecommendationDetailsPage,
    RecommendationsListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FruitsService,
    RecommendationsService,
    CutStringPipe,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
