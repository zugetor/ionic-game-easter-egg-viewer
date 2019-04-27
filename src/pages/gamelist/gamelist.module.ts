import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GamelistPage } from './gamelist';


@NgModule({
  declarations: [
    GamelistPage,
  ],
  imports: [
    IonicPageModule.forChild(GamelistPage),
  ],
})
export class GamelistPageModule {}
