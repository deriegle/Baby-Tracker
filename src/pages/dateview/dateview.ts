import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-dateview',
  templateUrl: 'dateview.html',
})
export class DateViewPage {
  feeding: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.feeding = this.navParams.get('feeding');
  }

  ionViewDidLoad() {
  }

}
