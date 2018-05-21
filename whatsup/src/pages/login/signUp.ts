import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LoginSuccPage} from "./loginSucc";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signUp',
  templateUrl: 'signUp.html',
})
export class SignUpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  showLoginSuccPage() {
    this.navCtrl.push(LoginSuccPage, {
    });
  }

}
