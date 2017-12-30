import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewFeedingModalPage } from './new-feeding-modal';

@NgModule({
  declarations: [
    NewFeedingModalPage,
  ],
  imports: [
    IonicPageModule.forChild(NewFeedingModalPage),
  ],
})
export class NewFeedingModalPageModule {}
