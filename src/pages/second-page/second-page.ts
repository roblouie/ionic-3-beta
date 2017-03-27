import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {IonicPage} from "ionic-angular/index";

@IonicPage()
@Component({
  selector: 'second-page',
  templateUrl: 'second-page.html'
})
export class SecondPage {

  constructor(public navCtrl: NavController) {
    
  }

}
