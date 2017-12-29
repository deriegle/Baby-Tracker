import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Feeding } from '../../models/Feeding';

@Injectable()
export class FeedingsProvider {
  feedingCollection: AngularFirestoreCollection<Feeding>;
  feedings: Observable<Feeding[]>;

  constructor(public afs: AngularFirestore) {
    // this.feedings = this.afs.collection('feedings').valueChanges();
    /*this.feedings = this.afs.collection('feedings').snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Feeding;
        data.id = a.payload.doc.id;
        return data;
      });
    });*/
   }

   getFeedings() {
     return this.feedings;
   }

}