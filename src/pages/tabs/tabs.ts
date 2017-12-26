import { Component } from '@angular/core';

import { TrackerPage } from '../tracker/tracker';
import { HomePage } from '../home/home';

@Component({
  template: `
    <ion-tabs>
      <ion-tab tabIcon="home" [root]="tab1"></ion-tab>
      <ion-tab tabIcon="calendar" [root]="tab2"></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage {
  tab1: any;
  tab2: any;

  constructor() {
    this.tab1 = HomePage;
    this.tab2 = TrackerPage;
  }
}
