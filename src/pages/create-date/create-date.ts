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
  parent: any;

  timedFeeding = {
    time: '11:00PM',
    fAmount: 0,
    bmAmount: 0,
    pee: false,
    poop: false,
    parent: this.parent
  };

  createdFeeding = {
    feeding: {
      date: new Date(),
      parent: ''
    },
    feed: this.timedFeeding
  }

  constructor(public navCtrl: NavController, public httpClient: HttpClient, public navParams: NavParams, public feedingsProvider: FeedingsProvider) {

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

}
