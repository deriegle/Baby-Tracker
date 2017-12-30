import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { Feeding } from '../../models/Feeding';
import { FeedingsProvider } from '../../providers/feedings/feedings';
import { NewFeedingModalPage } from '../new-feeding-modal/new-feeding-modal';

@Component({
  selector: 'page-dateview',
  templateUrl: 'dateview.html',
})
export class DateViewPage {
  feeding: Feeding;
  editState: boolean = false;
  feedingToEdit: Feeding;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, public feedingsProvider: FeedingsProvider) {
    this.feeding = this.navParams.get('feeding');
    console.log(this.feeding);
    console.log(this.feeding.feedings);
  }

  ionViewDidLoad() {
  }

  sortFeedings = function (feeding) {
    var date = new Date(feeding.time);
    return date;
  };

  openNewFeedingModal(event, feeding){
    let modal = this.modalCtrl.create(NewFeedingModalPage, {feeding: feeding});
    modal.present();
  }

  editFeeding(event, feeding){
    this.editState = true;
    this.feedingToEdit = feeding;
  }

  updateFeeding(event, feeding){
    this.feedingsProvider.updateFeeding(feeding);
    this.editState = false;
  }
}
