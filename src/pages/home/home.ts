import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {IonicPage} from "ionic-angular/index";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    navCtrl.push('SecondPage');
  }

}
