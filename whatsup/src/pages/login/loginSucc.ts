import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {EventPage} from "../home/home";
import {LoggedInHomePage} from "../loggedInHome/loggedInHome";
import {LoginPage} from "./login";
import * as firebase from "firebase";

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
  username = "";
  password = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) { //, public modalCtrl: ModalController
  }

  close(){
    this.navCtrl.push(EventPage, {

    });
  }

  login(){
    const navControl = this.navCtrl;
    firebase.auth().signInWithEmailAndPassword(this.username, this.password)
      .then(function (result) {
          navControl.push(LoggedInHomePage);
        },
        function (err) {
          navControl.push(LoginPage);
        });
  }
}
