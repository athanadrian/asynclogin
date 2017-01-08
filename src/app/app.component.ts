import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';


import { HomePage, LoginPage } from '../pages/pages';
import { Authentication } from '../providers/authentication';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;
  loader: any;


  constructor(public authentication: Authentication, public loadingController: LoadingController) {
    this.presentLoading();
    this.authentication.login().then((isLoggedIn) => {
      if (isLoggedIn) {
        this.rootPage = HomePage;
      } else {
        this.rootPage = LoginPage;
      }
      this.loader.dismiss();
    })
  }

  presentLoading() {
    this.loader = this.loadingController.create({
      content: "Γίνεται Πιστοποίηση...",
    });
    this.loader.present();
  }
}
