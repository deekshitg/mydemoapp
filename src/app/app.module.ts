import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import { Network } from '@ionic-native/network'; 

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ErrorPage } from '../pages/error/error';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ErrorPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ErrorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
