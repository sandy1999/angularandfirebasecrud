import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy  {
  title = 'app';
  subscription:Subscription;
  courses:any[];
  constructor(private db:AngularFireDatabase){
    this.subscription = db.list('/courses').valueChanges().subscribe(courses=>{
      this.courses = courses;
      console.log(this.courses);
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
