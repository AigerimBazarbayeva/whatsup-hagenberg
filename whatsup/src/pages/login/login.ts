import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
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
  isFromSignUp : boolean;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
    this.isFromSignUp = this.navParams.get("isFromSignUp");
  }

  // login function
  login(){
    const alert = this.alertCtrl.create({ // alert if login fails
      title: 'Login Failed',
      message: 'Please enter a valid email address and password or sign in.',
      buttons: ['Ok']
    });

    const navControl = this.navCtrl;
    firebase.auth().signInWithEmailAndPassword(this.username, this.password)
      .then(function (result) { // got to Home/Event page if everything went right with the login
          navControl.push(EventPage);
        },
        function (err) { // error
          console.log(err);
          alert.present(); // show alert on screen
        });
  }

  // push to Sign Up page
  showSignUpPage() {
    this.navCtrl.push(SignUpPage, {
    });
  }
}

