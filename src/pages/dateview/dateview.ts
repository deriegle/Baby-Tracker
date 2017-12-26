import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-dateview',
  templateUrl: 'dateview.html',
})
export class DateViewPage {
  selectedDate: any;
  date: any;
  
  constructor(public db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.selectedDate = navParams.get('date');
    this.date = db.list('/dates/2017-12-19/');
    console.log(this.date);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DateViewPage');
  }

}
