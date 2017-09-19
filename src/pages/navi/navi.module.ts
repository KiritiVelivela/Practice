import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NaviPage } from './navi';

@NgModule({
  declarations: [
    NaviPage,
  ],
  imports: [
    IonicPageModule.forChild(NaviPage),
  ],
})
export class NaviPageModule {}
