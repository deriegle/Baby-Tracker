import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { DateViewPage } from '../dateview/dateview';
import { CreateDatePage } from '../create-date/create-date';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { FeedingsProvider } from '../../providers/feedings/feedings';

@Component({
  selector: 'page-tracker',
  templateUrl: 'tracker.html',
})
export class TrackerPage {
  feedings: Observable<any>;
  dates: string[];

  constructor(public navCtrl: NavController, public httpClient: HttpClient, public navParams: NavParams) {
    this.feedings = this.httpClient.get('http://localhost:8080/api/feedings');

  }

  ionViewDidLoad() {

  }

 createFeedingPage(){
   this.navCtrl.push(CreateDatePage, {});
  }

  openDetailPage(feeding){
    this.navCtrl.push(DateViewPage, {
      feeding: feeding
    });
  }

}
