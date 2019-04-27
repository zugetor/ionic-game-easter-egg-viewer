import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GamedetailPage } from '../gamedetail/gamedetail';
import { Observable } from 'rxjs/Observable';
import { HttpClient} from '@angular/common/http';

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
  gamepost: Observable<any>;
  postlist="";
  constructor(public navCtrl: NavController, public httpClient: HttpClient) { 
    this.gamepost = this.httpClient.get('https://unswayable-dozen.000webhostapp.com/post.php?method=view');
    this.gamepost
    .subscribe(data => {
      console.log('my data: ', data);
      this.postlist=data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamelistPage');
  }
  viewDetailPage(detail){
    
    this.navCtrl.push(GamedetailPage, {detail: detail});
  }

}
