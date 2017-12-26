import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-create-date',
  templateUrl: 'create-date.html',
})
export class CreateDatePage {
  public date: any;
  currentDateTime = new Date();
  currentYear = this.currentDateTime.getFullYear();
  currentMonth = (this.currentDateTime.getMonth()) + 1;
  currentDate = this.currentDateTime.getDate();
  currentTime = this.currentDateTime.getHours().toString() + ":" + this.currentDateTime.getMinutes().toString();

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.date = {
      month: this.currentYear + '-' + this.currentMonth + '-' + this.currentDate,
      time: this.currentTime,
      pee: false,
      poop: false
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateDatePage');
  }

}
