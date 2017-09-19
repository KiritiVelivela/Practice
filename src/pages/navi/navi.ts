import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';


@Component({
  selector: 'page-navi',
  templateUrl: 'navi.html',
})
export class NaviPage {
home = HomePage;
grid = HomePage;
typer = HomePage;
faces = HomePage;
arena = HomePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
