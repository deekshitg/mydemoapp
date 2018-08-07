import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ErrorPage } from '../error/error';
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  
  showLoad: boolean = true;
  webref: any;
  url: string="https://hallpropane.myfuelportal.com";
  con_stat = true;
  extweb:any;
  constructor(private navCtrl: NavController, private iab: InAppBrowser, private network: Network, private plt:Platform) {
    
  }

  ngOnInit(){
    this.network.onDisconnect().subscribe(() => {
      this.con_stat = false;
    });
  }

  //Opens the login page when the Login Button is clicked
  openPortalSignIn(urlstring: any){
    this.showLoad = false;

    //check if network status is active.
    if(!this.con_stat){

      //Redirect to error page if network is Inactive.
      this.navCtrl.setRoot(ErrorPage,this.url);
      this.showLoad = true;
    
    }
    else{
        if(urlstring == 'home'){
          this.webref = this.iab.create(this.url,'_blank',{location:'no',hidden:'yes',toolbar:'no',hidespinner:'yes'});
        }
        else  if(urlstring == 'privacy'){
          this.webref = this.iab.create(this.url+'/Account/Privacy','_blank',{location:'no',hidden:'yes',toolbar:'no',hidespinner:'yes'});
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
    this.webref.on('loadstop').subscribe( () => {

      this.showLoad = true;
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
        this.showLoad = true;
        this.navCtrl.setRoot(ErrorPage,this.url);
      });
    }

    //Event to be triggered when IAB closes.
    this.webref.on('close').subscribe(() => {
      this.showLoad = true;
    });
  }

}
