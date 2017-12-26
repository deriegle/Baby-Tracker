import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireModule, FirebaseObjectObservable, AngularFireAuth, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class FirebaseProvider {

  constructor(private_af : AngularFire) { 

   }

  publiclistDates(): FirebaseListObservable<any[]> {
    returnthis._af.database.list('/dates');
  }
}
