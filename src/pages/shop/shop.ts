import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BuyoutPage } from '../buyout/buyout';

/**
 * Generated class for the ShopPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
  }

  onGoToBuyout(productData: {name: string, quantity: number}) {
    this.navCtrl.push(BuyoutPage, productData)
  }

}
