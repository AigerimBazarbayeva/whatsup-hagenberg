import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {DetailPage} from '../detail/detail';
import {LoginPage} from '../login/login';
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import * as firebase from "firebase";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class EventPage {
  todayEventList: AngularFireList<any>;
  upcomingEventList: AngularFireList<any>;
  todayEvent: Observable<any[]>;
  upcomingEvent: Observable<any[]>;

  isLogin: boolean;

  constructor(public navCtrl: NavController,
              public afDB: AngularFireDatabase) {
    var dateString = new Date().toJSON().slice(0,10).split('-').reverse().join('.');
    this.todayEventList = this.afDB.list('/events',
      ref => ref.orderByChild("date").equalTo(dateString));
    this.todayEvent = this.todayEventList.valueChanges();
    this.upcomingEventList = this.afDB.list('/events');
    this.upcomingEvent = this.upcomingEventList.valueChanges().map(qis => qis.filter(q => q.date != dateString));

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


