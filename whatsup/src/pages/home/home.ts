import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {DetailPage} from '../detail/detail';
import {LoginPage} from '../login/login';
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import * as firebase from "firebase";
import {LoggedInHomePage} from "../loggedInHome/loggedInHome";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class EventPage {
  todayEventList: Observable<any>;
  upcomingEventList: Observable<any>;
  eventType: string="today";

  isLogin: boolean;

  constructor(public navCtrl: NavController,
              public afDB: AngularFireDatabase) {
    var dateString = new Date().toJSON().slice(0,10).split('-').reverse().join('.');
    this.todayEventList =
      this.afDB.list('/events', ref => ref.orderByChild("date").equalTo(dateString))
        .snapshotChanges()
        .map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });
    this.upcomingEventList =
      this.afDB.list('/events')
        .snapshotChanges()
        .map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        }).map(qis => qis.filter(q => q.date != dateString));

    var user = firebase.auth().currentUser;

    if (user) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }

  showEventDetails(item) {
    this.navCtrl.push(DetailPage, {
      item: item
    });
  }

  logout(){
    firebase.auth().signOut();
    this.navCtrl.push(EventPage, {});
  }

  login(){
    this.navCtrl.push(LoginPage, {});
  }
}


