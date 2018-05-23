import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import {Component} from "@angular/core";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})

export class ProfilePage {
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
    this.upcomingEvent = this.upcomingEventList.valueChanges().map(qis => qis.filter(q => q.date != dateString));
  }

}
