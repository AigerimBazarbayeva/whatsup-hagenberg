import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {DetailPage} from '../detail/detail';
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class EventPage {
  todayEventList: AngularFireList<any>;
  upcomingEventList: AngularFireList<any>;
  todayEvent: Observable<any[]>;
  upcomingEvent: Observable<any[]>;


  constructor(public navCtrl: NavController,
              public afDB: AngularFireDatabase) {
    var dateString = new Date().toJSON().slice(0,10).split('-').reverse().join('.');
    this.todayEventList = this.afDB.list('/events',
      ref => ref.orderByChild("date").equalTo(dateString));
    this.todayEvent = this.todayEventList.valueChanges();
    this.upcomingEventList = this.afDB.list('/events');
    this.upcomingEvent = this.upcomingEventList.valueChanges();
  }

  showEventDetails(item) {
    this.navCtrl.push(DetailPage, {
      item: item
    });
  }
}


