import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { DateViewPage } from '../dateview/dateview';
import { CreateDatePage } from '../create-date/create-date';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import { Feeding } from '../../models/Feeding';

import { FeedingsProvider } from '../../providers/feedings/feedings';


@Component({
  selector: 'page-tracker',
  templateUrl: 'tracker.html',
})
export class TrackerPage {
  feedings: Feeding[];
  dates: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public feedingsProvider: FeedingsProvider) {

  }

  ionViewDidLoad() {
    this.feedingsProvider.getFeedings().subscribe(feeding => {
      this.feedings = feeding;
      console.log(feeding);
    })
  }

  ionViewDidEnter() {
    /*this.feedingsProvider.getFeedings().subscribe((feedings) => {
      this.feedings = feedings;
    });*/
  }

 createFeedingPage(){
   this.navCtrl.push(CreateDatePage, {});
  }

  deleteFeeding(event, feeding) {
    console.log('delete feeding ran');
    
  }

  openDetailPage(feeding){
    this.navCtrl.push(DateViewPage, {
      feeding: feeding
    });
  }

}
