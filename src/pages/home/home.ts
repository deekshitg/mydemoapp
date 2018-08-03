import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ErrorPage } from '../error/error';
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{
  
  
  showLoad: boolean = true;
  webref: any;
  url: any="https://demo.myfuelportal.com";

  constructor(public navCtrl: NavController, private iab: InAppBrowser, private network: Network, private plt:Platform) {
    
  }

  openPortalSignIn(urlstring: any){
    this.showLoad = false;

    if(urlstring == 'home'){
      this.webref = this.iab.create('https://demo.myfuelportal.com','_blank',{location:'no',hidden:'yes',toolbar:'no',hidespinner:'yes'});
    }
    else  if(urlstring == 'privacy'){
      this.webref = this.iab.create('https://demo.myfuelportal.com/Account/Privacy','_blank',{location:'no',hidden:'yes',toolbar:'no',hidespinner:'yes'});
    }

    this.webref.on('loadstart').subscribe((event) => {
      this.url = event.url;
    });
    this.webref.on('loadstop').subscribe( () => {
      this.showLoad = true;
      this.webref.show();
    });

    if(this.plt.is('android')){
      this.webref.on('loaderror').subscribe( event => {
        if(this.network.type === 'none' ){
          this.webref.close();
          alert("Looks like you are not online");
          this.navCtrl.setRoot(ErrorPage,this.url);
        }
      });
    }

    if(this.plt.is('ios')){
      this.network.onDisconnect().subscribe(() => {
        this.webref.close();
        this.showLoad = true;
        this.navCtrl.setRoot(ErrorPage,this.webref.url);
      });
    }

    this.webref.on('close').subscribe(() => {
      this.showLoad = true;
    })

  }

}
