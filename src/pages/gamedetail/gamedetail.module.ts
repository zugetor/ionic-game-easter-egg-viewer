import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GamedetailPage } from './gamedetail';

@NgModule({
  declarations: [
    GamedetailPage,
  ],
  imports: [
    IonicPageModule.forChild(GamedetailPage),
  ],
})
export class GamedetailPageModule {}
