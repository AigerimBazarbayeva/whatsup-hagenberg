import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {LoginSuccPage} from "./loginSucc";
import {EventPage} from "../home/home";
import {AngularFireDatabase} from "angularfire2/database";
import * as firebase from "firebase";

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

  username = "";
  password = "";
  rpassword = "";

  constructor(public navCtrl: NavController, public afDB: AngularFireDatabase) {

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

  signUp() {
    if (this.password != this.rpassword) {
      this.navCtrl.push(SignUpPage);
      return;
    }
    const navControl = this.navCtrl;
    firebase.auth().createUserWithEmailAndPassword(this.username, this.password)
      .then(function (result) {
        navControl.push(LoginSuccPage);
      },
      function (err) {
        navControl.push(SignUpPage);
      });
  }
}
