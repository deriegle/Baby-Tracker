import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DateviewPage } from './dateview';

@NgModule({
  declarations: [
    DateviewPage,
  ],
  imports: [
    IonicPageModule.forChild(DateviewPage),
  ],
})
export class DateviewPageModule {}
