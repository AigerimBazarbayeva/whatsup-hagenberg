import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {EventPage} from "../home/home";
import * as firebase from "firebase";

/**
 * Generated class for the SignUp Success page.
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

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
  }

  // login function
  login(){
    const alert = this.alertCtrl.create({ // alert if login fails
      title: 'Login Failed',
      message: 'Please enter a valid email address and password.',
      buttons: ['Ok']
    });

    const navControl = this.navCtrl;
    firebase.auth().signInWithEmailAndPassword(this.username, this.password)
      .then(function (result) { // got to Home/Event page if everything went right with the login
          navControl.push(EventPage);
        },
        function (err) { // error
          alert.present(); // show alert on screen
        });
  }
}
