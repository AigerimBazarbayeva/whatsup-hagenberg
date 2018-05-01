import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';

import {DetailPage} from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class EventPage {
  eventType: string = "today";
  items: any[];

  constructor(public navCtrl: NavController ) {
    this.items = [];
    for (let i=0; i<3; i++){
      this.items.push({
        text: "Event" + i,
        id: i,
        image: "../../assets/imgs/international.jpg",
        description: "Hallo das ist die Description",
        date: "19.06.2018",
        time: "17:00 Uhr",
        location: "Softwarepark Hagenberg",
      });
    }
  }

  showEventDetails(item){
    this.navCtrl.push(DetailPage, {
      item: item
    });
  }
}


