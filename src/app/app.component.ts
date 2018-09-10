import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<any[]>;
  title = 'testFirebase';
  constructor(db: AngularFirestore) {
    this.items = db.collection('speakers').valueChanges();
    console.log('db===>', this.items;
  }
}
