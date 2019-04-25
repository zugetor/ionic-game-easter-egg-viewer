import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Map, tileLayer } from 'leaflet';
/**
 * Generated class for the GamedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gamedetail',
  templateUrl: 'gamedetail.html',
})
export class GamedetailPage {
  map: Map;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamedetailPage');
	
  }
  ionViewDidEnter() {
    this.loadmap();
  }
  ionViewWillLeave() {
    this.map.remove();
  }
 
  loadmap() {
    this.map = new Map('map').fitWorld();

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(this.map);

	}

}
