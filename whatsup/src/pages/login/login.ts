import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SignUpPage} from "./signUp";
import {LoggedInHomePage} from "../loggedInHome/loggedInHome";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  showSignUpPage() {
    this.navCtrl.push(SignUpPage, {
    });
  }

  showLoggedInHomePage() {
    this.navCtrl.push(LoggedInHomePage, {
    });
  }
}
