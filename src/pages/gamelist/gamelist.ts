import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GamedetailPage } from '../gamedetail/gamedetail';

/**
 * Generated class for the GamelistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gamelist',
  templateUrl: 'gamelist.html',
})
export class GamelistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamelistPage');
  }
  viewDetailPage(){
    this.navCtrl.push(GamedetailPage);
  }

}
