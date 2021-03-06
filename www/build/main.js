webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorPage = /** @class */ (function () {
    function ErrorPage(navCtrl, navParams, iab, network, plt) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.network = network;
        this.plt = plt;
        this.url = "https://hallpropane.myfuelportal.com/";
    }
    ErrorPage_1 = ErrorPage;
    //Load page once the Network connectivity is active.
    ErrorPage.prototype.reloadPage = function (urlstring) {
        var _this = this;
        //Check if Network is active.
        if (this.network.type != 'none') {
            if (urlstring == 'policy') {
                this.webref = this.iab.create(this.url + '/Account/Privacy', '_blank', { location: 'no', hidden: 'yes', toolbar: 'no', hidespinner: 'yes' });
            }
            else {
                this.webref = this.iab.create(this.url, '_blank', { location: 'no', hidden: 'yes', toolbar: 'no', hidespinner: 'yes' });
            }
        }
        //Subscribe to observe each page load 
        this.webref.on('loadstart').subscribe(function (event) {
            if (event.url.indexOf('facebook') != -1 || event.url.indexOf('google') != -1) {
                _this.webref = _this.iab.create(event.url, '_system');
            }
            else {
                _this.url = event.url;
            }
        });
        //Load the current page when app opens an external link like Facebook and Google+
        this.plt.pause.subscribe(function () {
            _this.webref = _this.iab.create(_this.url, '_blank', { location: 'no', hidden: 'yes', toolbar: 'no', hidespinner: 'yes' });
        });
        this.plt.resume.subscribe(function () {
            _this.webref.show();
        });
        //Subscribe to observe when the page completely loads: To make sure that current page is displayed only after the entire page is loaded. 
        this.webref.on('loadstop').subscribe(function () {
            _this.webref.show();
        });
        //Event to be triggered when network is disconnected in android.
        if (this.plt.is('android')) {
            this.webref.on('loaderror').subscribe(function (event) {
                //check if error is caused because of Network connectivity.
                if (_this.network.type === 'none') {
                    _this.webref.close();
                    alert("Looks like you are not online");
                    _this.navCtrl.setRoot(ErrorPage_1, _this.url);
                }
            });
        }
        //Event to be triggered when network is disconnected in iOS.
        if (this.plt.is('ios')) {
            this.network.onDisconnect().subscribe(function () {
                _this.webref.close();
                _this.navCtrl.setRoot(ErrorPage_1, _this.webref.url);
            });
        }
    };
    ErrorPage = ErrorPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-error',template:/*ion-inline-start:"/Users/duth/Desktop/Ionic Apps/mydemoapp/src/pages/error/error.html"*/'<ion-header>\n\n    <ion-navbar color="appColor" text-center>\n      <ion-title>MyFuelPortal</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n      <ion-grid>\n          <ion-row>\n            <ion-col text-center>\n                <h1>Network Connection Error</h1>\n                <p>The internet connection appears to be offline at the moment. Please check your network connection and try again once the connection has been restored.</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col text-center>\n                <button ion-button color="danger" (click)="reloadPage()" icon-first><ion-icon name="refresh"></ion-icon> Try Again</button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n  </ion-content>\n  <ion-footer text-center>\n  \n      <a ion-button text-center clear (click)="reloadPage(\'policy\')" color="primary">Privacy Policy</a>\n      <p><strong>Copyright © 2018 MyFuelPortal.</strong> All rights reserved.</p>\n    \n  </ion-footer>\n  \n\n\n\n'/*ion-inline-end:"/Users/duth/Desktop/Ionic Apps/mydemoapp/src/pages/error/error.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */]])
    ], ErrorPage);
    return ErrorPage;
    var ErrorPage_1;
}());

//# sourceMappingURL=error.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_error__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, iab, network, plt) {
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.network = network;
        this.plt = plt;
        this.showLoad = true;
        this.url = "https://hallpropane.myfuelportal.com";
        this.con_stat = true;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.network.onDisconnect().subscribe(function () {
            _this.con_stat = false;
        });
    };
    //Opens the login page when the Login Button is clicked
    HomePage.prototype.openPortalSignIn = function (urlstring) {
        var _this = this;
        this.showLoad = false;
        //check if network status is active.
        if (!this.con_stat) {
            //Redirect to error page if network is Inactive.
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__error_error__["a" /* ErrorPage */], this.url);
            this.showLoad = true;
        }
        else {
            if (urlstring == 'home') {
                this.webref = this.iab.create(this.url, '_blank', { location: 'no', hidden: 'yes', toolbar: 'no', hidespinner: 'yes' });
            }
            else if (urlstring == 'privacy') {
                this.webref = this.iab.create(this.url + '/Account/Privacy', '_blank', { location: 'no', hidden: 'yes', toolbar: 'no', hidespinner: 'yes' });
            }
        }
        //Subscribe to observe each page load 
        this.webref.on('loadstart').subscribe(function (event) {
            if (event.url.indexOf('facebook') != -1 || event.url.indexOf('google') != -1) {
                _this.webref = _this.iab.create(event.url, '_system');
            }
            else {
                _this.url = event.url;
            }
        });
        //Load the current page when app opens an external link like Facebook and Google+
        this.plt.pause.subscribe(function () {
            _this.webref = _this.iab.create(_this.url, '_blank', { location: 'no', hidden: 'yes', toolbar: 'no', hidespinner: 'yes' });
        });
        this.plt.resume.subscribe(function () {
            _this.webref.show();
        });
        //Subscribe to observe when the page completely loads: To make sure that current page is displayed only after the entire page is loaded. 
        this.webref.on('loadstop').subscribe(function () {
            _this.showLoad = true;
            _this.webref.show();
        });
        //Event to be triggered when network is disconnected in android.
        if (this.plt.is('android')) {
            this.webref.on('loaderror').subscribe(function (event) {
                //check if error is caused because of Network connectivity.
                if (_this.network.type === 'none') {
                    _this.webref.close();
                    alert("Looks like you are not online");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__error_error__["a" /* ErrorPage */], _this.url);
                }
            });
        }
        //Event to be triggered when network is disconnected in iOS.
        if (this.plt.is('ios')) {
            this.network.onDisconnect().subscribe(function () {
                _this.webref.close();
                _this.showLoad = true;
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__error_error__["a" /* ErrorPage */], _this.url);
            });
        }
        //Event to be triggered when IAB closes.
        this.webref.on('close').subscribe(function () {
            _this.showLoad = true;
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/duth/Desktop/Ionic Apps/mydemoapp/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar color="appColor" text-center>\n    <ion-title>MyFuelPortal</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n          <ion-col text-center>\n              <h1>Welcome to MyFuelPortal</h1>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col text-center>\n              <button ion-button color="appColor" (click)="openPortalSignIn(\'home\')" icon-right>Log In <ion-icon name="arrow-forward"></ion-icon></button>\n              <div><span [hidden]="showLoad"><ion-spinner></ion-spinner></span></div>\n              \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n</ion-content>\n<ion-footer text-center>\n\n    <a ion-button text-center clear (click)="openPortalSignIn(\'privacy\')" color="primary">Privacy Policy</a>\n    <p><strong>Copyright © 2018 MyFuelPortal.</strong> All rights reserved.</p>\n  \n</ion-footer>'/*ion-inline-end:"/Users/duth/Desktop/Ionic Apps/mydemoapp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_error_error__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_error_error__["a" /* ErrorPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_error_error__["a" /* ErrorPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_error_error__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, network) {
        var _this = this;
        this.network = network;
        this.splash = true;
        this.showSplash = true;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__["timer"])(3000).subscribe(function () { return _this.showSplash = false; });
            if (_this.network.type == 'none' || _this.network.type == 'unknown') {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_error_error__["a" /* ErrorPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
            }
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/duth/Desktop/Ionic Apps/mydemoapp/src/app/app.html"*/'<div *ngIf="showSplash" class="splash">\n    <div class="spinner">\n        <div class="cube1"></div>\n        <div class="cube2"></div>\n    </div>\n</div>\n\n\n\n<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/duth/Desktop/Ionic Apps/mydemoapp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map