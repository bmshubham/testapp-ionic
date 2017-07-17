import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserPage } from './user/user';

/**
 * Generated class for the UsersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  onLoadUser(name: string) {
    this.navCtrl.push(UserPage, {userName: name });
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  ionViewCanEnter(): boolean | Promise<boolean> {
    console.log('ionViewCanEnter');
    const rnd = Math.random();
    return rnd > 0.5;
  }

}
