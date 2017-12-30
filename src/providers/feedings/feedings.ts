import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Feeding } from '../../models/Feeding';

@Injectable()
export class FeedingsProvider {
  feedingCollection: AngularFirestoreCollection<Feeding>;
  feedings: Observable<Feeding[]>;
  feedingDoc: AngularFirestoreDocument<Feeding>;

  constructor(public afs: AngularFirestore) {
    // this.feedings = this.afs.collection('feedings').valueChanges();
    this.feedingCollection = this.afs.collection('feedings', ref => ref.orderBy('date', 'desc'));
    
    this.feedings = this.feedingCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Feeding;
        data.id = a.payload.doc.id;
        return data;
      });
    });

  }

  getFeedings() {
    return this.feedings;
  }

  addFeeding(feeding: Feeding){
  this.feedingCollection.add(feeding);
  }

  deleteFeeding(feeding: Feeding){
    this.feedingDoc = this.afs.doc(`feedings/${feeding.id}`);
    this.feedingDoc.delete();
  }

  updateFeeding(feeding : Feeding){
    this.feedingDoc = this.afs.doc(`feedings/${feeding.id}`);
    this.feedingDoc.update(feeding);
  }

}