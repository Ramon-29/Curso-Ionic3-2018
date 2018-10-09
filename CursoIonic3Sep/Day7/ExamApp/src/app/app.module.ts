import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { PostsListPage } from '../pages/postsList/postsList';
import { PostsService } from '../services/posts';
import { MessagesService } from '../services/messages';
import { PostDetailsPage } from '../pages/postDetails/postDetails';

@NgModule({
  declarations: [
    MyApp,
    PostsListPage,
    PostDetailsPage
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PostsListPage,
    PostDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PostsService,
    MessagesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
