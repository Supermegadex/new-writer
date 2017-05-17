import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

/**
 * Generated class for the Main page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class Main {

  pub: FirebaseListObservable<any[]>;


  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
    this.pub = db.list('public');
  }

  ionViewDidLoad() {
    this.pub.subscribe(snapshot => {
      console.log(snapshot);
    })
  }

}
