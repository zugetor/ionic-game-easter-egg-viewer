import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, private platform: Platform) {

  }
  
  openUrl(app: string) {
	  /*
        switch (app) {
            case 'facebook':
                if (this.platform.is('ios')) {
					window.open('fb://profile/726019957484156', '_self');
				} else if (this.platform.is('android')) {
					window.open('fb://facewebmodal/f?href=https://www.facebook.com/zugetor', '_self');
				} else {
					window.open('https://www.facebook.com/zugetor', '_self');
				}
                break;
            case 'twitter':
                if (this.platform.is('ios')) {
					window.open('twitter:///user?screen_name=zugetor', '_self');
				} else if (this.platform.is('android')) {
					window.open('twitter://user?screen_name=zugetor', '_self');
				} else {
					window.open('https://www.twitter.com/zugetor', '_self');
				}
                break;
			case 'youtube':
                if (this.platform.is('ios')) {
					window.open('youtube://www.youtube.com/c/ZuGeToriT', '_self');
				} else {
					window.open('https://www.youtube.com/c/ZuGeToriT', '_self');
				}
                break;
			case 'github':
				window.open('https://github.com/sunsunza2009', '_self');
                break;
            default:
                break;
        }*/
    }

}
