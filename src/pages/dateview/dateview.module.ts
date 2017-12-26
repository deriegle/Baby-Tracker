import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DateViewPage } from './dateview';

@NgModule({
  declarations: [
    DateViewPage,
  ],
  imports: [
    IonicPageModule.forChild(DateViewPage),
  ],
})
export class DateViewPageModule {}
