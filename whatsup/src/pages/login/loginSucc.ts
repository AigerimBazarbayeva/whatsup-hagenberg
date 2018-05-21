import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LoggedInHomePage} from "../loggedInHome/loggedInHome";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-loginSucc',
  templateUrl: 'loginSucc.html',
})
export class LoginSuccPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginSuccPage');
  }

  showLoggedInHomePage() {
  this.navCtrl.push(LoggedInHomePage, {
  });
  }
}
