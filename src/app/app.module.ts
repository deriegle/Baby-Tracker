import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MomentModule } from 'angular2-moment';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TrackerPage } from '../pages/tracker/tracker';
import { TabsPage } from '../pages/tabs/tabs';
import { DateViewPage } from '../pages/dateview/dateview';
import { CreateDatePage } from '../pages/create-date/create-date';

import { firebase } from '../environment';
import { FeedingsProvider } from '../providers/feedings/feedings';


@NgModule({
  declarations: [
    MyApp,
    TrackerPage,
    DateViewPage,
    HomePage,
    TabsPage,
    CreateDatePage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    MomentModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TrackerPage,
    DateViewPage,
    HomePage,
    TabsPage,
    CreateDatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FeedingsProvider
  ]
})
export class AppModule {}
