import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FruitCardComponent } from '../components/fruit-card/fruit-card';
import { ExpandableComponent } from '../components/expandable/expandable';
import { RecommendationCardComponent } from '../components/recommendation-card/recommendation-card';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FruitCardComponent,
    RecommendationCardComponent,
    ExpandableComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
