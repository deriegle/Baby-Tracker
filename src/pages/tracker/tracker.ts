import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-tracker',
  templateUrl: 'tracker.html',
})
export class TrackerPage {
  dates: [
    {month: string, date: number, year: number}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.dates = [
    { month: 'December', date: 19, year: 2017 },
    { month: 'December', date: 20, year: 2017 },
    { month: 'December', date: 21, year: 2017 },
    { month: 'December', date: 22, year: 2017 }
  ];
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackerPage');
  }

  dateSelected(date: {month: string, date: number, year: number}){
    console.log("Selected Date is : ", date);
  }

}
