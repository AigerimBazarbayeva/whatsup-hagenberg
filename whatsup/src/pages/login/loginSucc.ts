import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {EventPage} from "../home/home";

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

  constructor(public navCtrl: NavController, public navParams: NavParams) { //, public modalCtrl: ModalController
  }

  showLoggedInHomePage() {
  this.navCtrl.push(EventPage, {
  });
  }

  close(){
    this.navCtrl.push(EventPage, {

    });
  }
}