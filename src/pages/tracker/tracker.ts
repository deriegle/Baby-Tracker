import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DateViewPage } from '../dateview/dateview';
import { CreateDatePage } from '../create-date/create-date';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-tracker',
  templateUrl: 'tracker.html',
})
export class TrackerPage {
  items: Observable<any[]>;
  dates: string[];

  constructor(public db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    
    this.items = db.list('dates').valueChanges();

    this.dates = [ "2017-12-19", "2017-12-20",
                  "2017-12-21","2017-12-22",
                  "2017-12-23", "2017-12-24",
                  "2017-12-25", "2017-12-26"
    ];

    let monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    for(let i=0; i < this.dates.length; i++){

      var currentDate = new Date(this.dates[i]);

      this.dates[i] = monthNames[currentDate.getMonth()] + " " +
       currentDate.getDate().toString() + ", " +
       currentDate.getFullYear().toString(); 
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
