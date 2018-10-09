import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { Explanation1Page } from '../pages/explanation1/explanation1';
import { Explanation2Page } from '../pages/explanation2/explanation2';
import { Explanation3Page } from '../pages/explanation3/explanation3';
import { Explanation4Page } from '../pages/explanation4/explanation4';
import { Explanation5Page } from '../pages/explanation5/explanation5';
import { FruitCardComponent } from '../components/fruitCard/fruitCard';
import { HighlightDirective } from '../directives/highlight';

@NgModule({
  declarations: [
    MyApp,
    Explanation1Page,
    Explanation2Page,
    Explanation3Page,
    Explanation4Page,
    Explanation5Page,
    FruitCardComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Explanation1Page,
    Explanation2Page,
    Explanation3Page,
    Explanation4Page,
    Explanation5Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
