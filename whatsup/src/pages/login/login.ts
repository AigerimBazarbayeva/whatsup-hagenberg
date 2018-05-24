import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SignUpPage} from "./signUp";
import * as firebase from "firebase";
import {EventPage} from "../home/home";

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
  username = "";
  password = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  showSignUpPage() {
    this.navCtrl.push(SignUpPage, {
    });
  }

  login(){
    const navControl = this.navCtrl;
    firebase.auth().signInWithEmailAndPassword(this.username, this.password)
      .then(function (result) {
          navControl.push(EventPage);
        },
        function (err) {
          navControl.push(LoginPage);
        });
  }


}

