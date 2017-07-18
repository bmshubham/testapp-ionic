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

  ionViewCanEnter(): boolean | Promise<void> {
    console.log('ionViewCanEnter');
    const rnd = Math.random();
    return rnd > 0.5;
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  // ionViewCanLeave(): boolean | Promise<void> {
  //   console.log('ionViewCanLeave');
  //   let promise = new Promise((resolve, reject) => 
  //   {
  //     setTimeout(() =>
  //     {
  //       resolve();
  //     }, 1000);
  //   });  
  //   return promise;
  // }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload');
  }


}
