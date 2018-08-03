import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserEvent } from '@ionic-native/in-app-browser';
import { Network } from '@ionic-native/network';


@Component({
  selector: 'page-error',
  templateUrl: 'error.html',
})
export class ErrorPage {

  webref: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser, private network: Network) {
  }

  reloadPage(urlstring?: string){
    let url = this.navParams.data;
    if(urlstring == 'policy'){
      this.webref = this.iab.create('https://demo.myfuelportal.com/Account/Privacy','_blank',{location:'no',hidden:'yes',toolbar:'no',hidespinner:'yes'});
    }
    else{
      this.webref = this.iab.create(url,'_blank',{location:'no',hidden:'yes',toolbar:'no',hidespinner:'yes'});
    } 
    this.webref.on('loadstop').subscribe(()=>{
      this.webref.show();
    });
    this.webref.on('loaderror').subscribe((event: InAppBrowserEvent) => {
      if(this.network.type === 'none'){
        this.webref.close();
        alert("Looks like you are not online");
        this.navCtrl.setRoot(ErrorPage,event.url);
      }
    });
  }

}
