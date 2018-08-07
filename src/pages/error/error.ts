import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { InAppBrowser, InAppBrowserEvent } from '@ionic-native/in-app-browser';
import { Network } from '@ionic-native/network';


@Component({
  selector: 'page-error',
  templateUrl: 'error.html',
})
export class ErrorPage {
  
  webref: any;
  url = "https://hallpropane.myfuelportal.com/";

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser, private network: Network, private plt: Platform) {
  }

  //Load page once the Network connectivity is active.
  reloadPage(urlstring?: string){
    //Check if Network is active.
    if(this.network.type != 'none'){
    
      if(urlstring == 'policy'){
        this.webref = this.iab.create(this.url+'/Account/Privacy','_blank',{location:'no',hidden:'yes',toolbar:'no',hidespinner:'yes'});
      }
      else{
        this.webref = this.iab.create(this.url,'_blank',{location:'no',hidden:'yes',toolbar:'no',hidespinner:'yes'});
      } 
    }


    //Subscribe to observe each page load 
    this.webref.on('loadstart').subscribe((event) => {
      
      if(event.url.indexOf('facebook') != -1 || event.url.indexOf('google') != -1){
        
        this.webref = this.iab.create(event.url,'_system');
      }
      else{
        this.url = event.url;
      }

    });

    //Load the current page when app opens an external link like Facebook and Google+
    this.plt.pause.subscribe(() => {

        this.webref = this.iab.create(this.url,'_blank',{location:'no',hidden:'yes',toolbar:'no',hidespinner:'yes'});

    });
    this.plt.resume.subscribe(() => {

      this.webref.show();

    });

    //Subscribe to observe when the page completely loads: To make sure that current page is displayed only after the entire page is loaded. 
    this.webref.on('loadstop').subscribe(()=>{
      this.webref.show();
    });

    //Event to be triggered when network is disconnected in android.
    if(this.plt.is('android')){
      this.webref.on('loaderror').subscribe( event => {
        //check if error is caused because of Network connectivity.
        if(this.network.type === 'none' ){
          this.webref.close();
          alert("Looks like you are not online");
          this.navCtrl.setRoot(ErrorPage,this.url);
        }

      });
    }

    //Event to be triggered when network is disconnected in iOS.
    if(this.plt.is('ios')){
      this.network.onDisconnect().subscribe(() => {

        this.webref.close();
        this.navCtrl.setRoot(ErrorPage,this.webref.url);

      });
    }
  }

}
