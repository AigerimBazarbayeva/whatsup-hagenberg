import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoginPage} from '../login/login'
import * as firebase from "firebase";
import {AngularFireDatabase} from "angularfire2/database";

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  item: any;
  isLogin : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController,  public afDB: AngularFireDatabase) {
    this.item = navParams.get('item');
    this.afDB = afDB;

    var user = firebase.auth().currentUser;

    if (user) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }

  joinEvent() {
    var user = firebase.auth().currentUser;

    if (user) {
      this.joinUserToEvent(user);

    } else {
      this.showPrompt();
    }
  }

  joinUserToEvent(user){
    //this.afDB.list("/events").update(this.item.)
  }

  showPrompt(){
    const navControl = this.navCtrl;
    let prompt = this.alertCtrl.create({
      title: 'LOGIN REQUIRED',
      message: "For joining an event, you have to be logged in.",
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
            navControl.push(LoginPage);

          }
        }
      ]
    });
    prompt.present();
  }

  logout(){
    firebase.auth().signOut();
    this.navCtrl.push(DetailPage, {
      item: this.item
    });
  }

  login(){
    this.navCtrl.push(LoginPage, {});
  }

}
