import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {LoginSuccPage} from "./loginSucc";
import {EventPage} from "../home/home";
import { AlertController } from 'ionic-angular';
import {AngularFireDatabase} from "angularfire2/database";
import * as firebase from "firebase";

/**
 * Generated class for the SignUp page.
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

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public afDB: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  // push to LoginSucc, if the Sign Up progress was successfull
  showLoginSuccPage() {
    this.navCtrl.push(LoginSuccPage, {
    });
  }

  // close function
  close(){
    this.navCtrl.push(EventPage, {
    });
  }

  // function for Sign Up
  signUp() {
    const alert = this.alertCtrl.create({ // alert if Sign Up fails
      title: 'Sign Up Failed',
      message: 'Please enter a valid email address and password. You can find guidelines at the info button above!',
      buttons: ['Ok']
    });

    if (this.password != this.rpassword) { // look if password is correct
      this.navCtrl.push(SignUpPage);
      return;
    }
    const navControl = this.navCtrl;
    firebase.auth().createUserWithEmailAndPassword(this.username, this.password)
      .then(function (result) {  // got to Login page if everything went right with the Sign Up
        navControl.push(LoginSuccPage);
      },
      function (err) { //error
        alert.present(); // show alert on screen
      });
  }

  presentAlertEM() {
    let alert = this.alertCtrl.create({
      title: 'Guidelines',
      message: 'Example email address: yourpart@example.com ! The password must consist of minimum 6 signs.',
      buttons: ['Ok']
    });
    alert.present();
  }
}

