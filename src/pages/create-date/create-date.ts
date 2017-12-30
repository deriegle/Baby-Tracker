import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import { FeedingsProvider } from '../../providers/feedings/feedings';
import { Feeding } from '../../models/Feeding';

@Component({
  selector: 'page-create-date',
  templateUrl: 'create-date.html',
})
export class CreateDatePage {
  m = moment();
  todaysDate = moment().format();
  todaysTime = moment().format();

  currentFeeding = {
    time: this.todaysTime,
    bmAmount: 0,
    fAmount: 0,
    parent: '',
    pee: true,
    poop: true
  }

  feeding: Feeding = {
    date: this.todaysDate,
    feedings: [
      this.currentFeeding
    ]
  }

  constructor(public navCtrl: NavController, public feedingsProvider: FeedingsProvider, public navParams: NavParams) { }

  saveFeeding() {
    if(this.currentFeeding.parent != ''){
      this.feedingsProvider.addFeeding(this.feeding);
      this.navCtrl.pop();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateDatePage');
  }

}
