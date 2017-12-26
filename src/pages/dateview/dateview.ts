import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-dateview',
  templateUrl: 'dateview.html',
})
export class DateViewPage {
  selectedDate: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedDate = navParams.get('date');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DateViewPage');
  }

}
