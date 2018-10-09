import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ExpandableContentComponent } from '../components/expandableContent/expandableContent';
import { FruitComponent } from '../components/fruit/fruit';
import { RatingComponent } from '../components/rating/rating';
import { RecommendationComponent } from '../components/recommendation/recommendation';
import { MainPage } from '../pages/main/main';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    ExpandableContentComponent,
    FruitComponent,
    RatingComponent,
    RecommendationComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
