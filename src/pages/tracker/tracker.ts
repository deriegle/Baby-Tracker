import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DateViewPage } from '../dateview/dateview';
import { CreateDatePage } from '../create-date/create-date';

@Component({
  selector: 'page-tracker',
  templateUrl: 'tracker.html',
})
export class TrackerPage {
  dates: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dates = [ "2017-12-19", "2017-12-20",
                  "2017-12-21","2017-12-22",
                  "2017-12-23", "2017-12-24",
                  "2017-12-25", "2017-12-26"
    ];
    let i = 0;
    for(i; i < this.dates.length; i++){
      this.dates[i] = new Date(this.dates[i]).toDateString();  
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackerPage');
  }

  createNewDate(event){
    this.navCtrl.push(CreateDatePage, {});
  }

  dateSelected(event, date){
    this.navCtrl.push(DateViewPage, {
      date: date
    });
  }

}
