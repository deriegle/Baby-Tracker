import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TrackerPage } from '../pages/tracker/tracker';
import { TabsPage } from '../pages/tabs/tabs';
import { DateViewPage } from '../pages/dateview/dateview';
import { CreateDatePage } from '../pages/create-date/create-date';

import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from '../providers/firebase/firebase';


const firebaseConfig = {
  apiKey: "AIzaSyBqNjPId1ttUqF3Ku0DzEWsWhkDxzCpul8",
  authDomain: "babytracker-ed923.firebaseapp.com",
  databaseURL: "https://babytracker-ed923.firebaseio.com",
  projectId: "babytracker-ed923",
  storageBucket: "babytracker-ed923.appspot.com",
  messagingSenderid: "560163779110"
};

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
    IonicModule.forRoot(MyApp),
    AngularFireModule.initalizeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TrackerPage,
    DateViewPage,
    HomePage,
    TabsPage,
    CreateDatePage
    // AboutPage,
    // ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
