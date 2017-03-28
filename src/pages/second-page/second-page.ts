import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'second-page',
  templateUrl: 'second-page.html'
})
export class SecondPage {
  constructor(public navCtrl: NavController) {}
}
