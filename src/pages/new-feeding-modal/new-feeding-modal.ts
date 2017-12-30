import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Feeding } from '../../models/feeding';
import { FeedingsProvider } from '../../providers/feedings/feedings';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-new-feeding-modal',
  templateUrl: 'new-feeding-modal.html',
})
export class NewFeedingModalPage {
  m = moment();
  feeding = {
    time: moment().format(),
    bmAmount: 0,
    fAmount: 0,
    parent: '',
    pee: true,
    poop: true
  }
  currentFeeding: Feeding;

  constructor(public feedingsProvider: FeedingsProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.currentFeeding = this.navParams.get('feeding');
    console.log(this.currentFeeding);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewFeedingModalPage');
  }

  updateFeeding(event, feeding) {
    console.log('Update: ' + feeding);
    this.currentFeeding.feedings.push(feeding);
    this.feedingsProvider.updateFeeding(this.currentFeeding);
    this.navCtrl.pop();
  }

  dismiss() {
    this.navCtrl.pop();
  }

}
