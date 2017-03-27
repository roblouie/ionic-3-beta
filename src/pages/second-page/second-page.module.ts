import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SecondPage } from './second-page';

@NgModule({
  declarations: [
    SecondPage,
  ],
  imports: [
    IonicPageModule.forChild(SecondPage),
  ],
  entryComponents: [
    SecondPage,
  ]
})
export class SecondPageModule {}
