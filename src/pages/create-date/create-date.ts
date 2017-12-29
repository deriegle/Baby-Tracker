import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FeedingsProvider } from '../../providers/feedings/feedings';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-create-date',
  templateUrl: 'create-date.html',
})
export class CreateDatePage {
  m = moment();
  todaysDate = moment().format();
  todaysTime = moment().format();
  
  timedFeeding = {
    time: this.todaysTime,
    fAmount: 0,
    bmAmount: 0,
    pee: false,
    poop: false
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
        this.navCtrl.pop();
      },
      err => {
        console.log(err);
      }
    );
  }

  convertUTCDateToLocalDate(date) {
    var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

    var offset = date.getTimezoneOffset() / 60;
    var hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateDatePage');
  }

}
