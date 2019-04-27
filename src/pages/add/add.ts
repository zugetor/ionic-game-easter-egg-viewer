import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  this.selectGame = "Select Game!!";
  this.description = "please select game to add easter eggs";
  }

  items;
  selectGame;
  description;
  game;
  
  chooseGame(game:string){
    this.selectGame=game;
    this.description = "";
  }

  initializeItems() {
    this.items = [
      'XCOM 2',
      'Dishonored 2',
      'Total War: Warhammer 2',
      'League of Legends',
      'Dark Souls 3',
      'Stardew Valley',
      'God of war 3',
      'Fallout 4',
      'Grand Theft Auto 5',
      'red dead redemption 2',
      'Subnautica',
      'Assassin\'s creed Origins',
      'Diablo 3',
      'Assassin\'s Creed Odyssey',
      'Devil May Cry 5',
      'Metro Exodus',
      'Counter-Strike: Global Offensive',
      'Undertale',
      'The Elder Scrolls 5: Skyrim',
      'Mafia 2',
      'Bioshock Infinite',
      'Overwatch',
      'Marvel\'s Spider-Man',
      'Minecraft',
      'Uncharted 4',
      'The Witcher 3: Wild Hunt',
      'Borderlands'
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
