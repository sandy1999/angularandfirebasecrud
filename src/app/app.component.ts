import { Component, OnDestroy } from '@angular/core';
import { FirebaseDatabase } from '@firebase/database-types';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses$;
  author$;
  constructor(private db:AngularFireDatabase){
    this.courses$ = db.list('courses').valueChanges();
    this.author$ = db.object('authors/1').valueChanges();
  }
}
