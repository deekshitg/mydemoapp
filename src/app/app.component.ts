import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { timer } from 'rxjs/observable/timer';

import { HomePage } from '../pages/home/home';
import { Network } from '@ionic-native/network';
import { ErrorPage } from '../pages/error/error';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  splash = true;
  rootPage:any;
  showSplash = true;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private network: Network) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      timer(3000).subscribe( () => this.showSplash = false);
      if(this.network.type == 'none' || this.network.type == 'unknown'){
        this.rootPage = ErrorPage;
      }
      else{
        this.rootPage = HomePage;
      }
    });
  }

}

