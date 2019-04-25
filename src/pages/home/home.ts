import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { GamelistPage } from '../gamelist/gamelist';
import { AddPage } from '../add/add';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ChangeToGamepage(){
    this.navCtrl.push(GamelistPage);
  }
  ChangeToAddpage(){
    this.navCtrl.push(AddPage);
  }
}
