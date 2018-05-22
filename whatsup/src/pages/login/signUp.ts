import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LoginSuccPage} from "./loginSucc";
import { ModalController, NavParams } from 'ionic-angular';
import {EventPage} from "../home/home";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  showLoginSuccPage() {
    this.navCtrl.push(LoginSuccPage, {
    });
  }

  close(){
    this.navCtrl.push(EventPage, {

    });
  }
}
