import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FeedingsProvider } from '../../providers/feedings/feedings';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-create-date',
  templateUrl: 'create-date.html',
})
export class CreateDatePage {
  d = new Date;
  todaysDate = this.d.getFullYear().toString() + '-' + (this.d.getMonth() + 1) + '-' + this.d.getDate().toString();
  todaysTime = this.d.getHours().toString() + ':' + this.d.getMinutes().toString();
  
  timedFeeding = {
    time: this.todaysTime,
    fAmount: 0,
    bmAmount: 0,
    pee: false,
    poop: false,
  };

  createdFeeding = {
    feeding: {
      date: this.todaysDate,
      parent: ''
    },
    feed: this.timedFeeding
  }

  constructor(public navCtrl: NavController, public httpClient: HttpClient, public navParams: NavParams) {
  }

  saveFeeding() {
    this.httpClient.post("http://localhost:8080/api/feedings", this.createdFeeding ).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateDatePage');
  }
/*
  findMonth(d){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return `$(months[d])`;
  }

  formattedDate(d) {
    let month = String(this.findMonth(d.getMonth()));
    let day = String(d.getDate());
    const year = String(d.getFullYear());

    if (day.length < 2) day = '0' + day;
    return `${month} ${day}, ${year}`;
  }
*/
}
