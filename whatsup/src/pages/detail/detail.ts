import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoginPage} from '../login/login'
import * as firebase from "firebase";
import {AngularFireDatabase} from "angularfire2/database";
import {EventPage} from "../home/home";

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
  isJoined: boolean;

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

    if (user && this.item.joinedUsers && this.item.joinedUsers.indexOf(user.email) >= 0){
      this.isJoined = true;
    } else{
      this.isJoined = false;
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

  joinUserToEvent(user: firebase.User){
    var newItem = {
      date: this.item.date,
      details: this.item.details,
      image: this.item.image,
      location: this.item.location,
      text: this.item.text,
      time: this.item.time,
      joinedUsers: [],
      key: this.item.key
    };


    const navControl = this.navCtrl;

    if (this.item.joinedUsers){
      newItem.joinedUsers = this.item.joinedUsers;
    }
    newItem.joinedUsers.push(user.email);
    this.afDB.object("/events/" + this.item.key).update(newItem).then(function (result) {
      navControl.push(DetailPage, {
        item: newItem
      });
    })
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

  showHomePage(){
    this.navCtrl.push(EventPage, {});
  }

}
