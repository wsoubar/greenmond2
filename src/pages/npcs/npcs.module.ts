import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NpcsPage } from './npcs';

@NgModule({
  declarations: [
    NpcsPage,
  ],
  imports: [
    IonicPageModule.forChild(NpcsPage),
  ],
  exports: [
    NpcsPage
  ]
})
export class NpcsPageModule {}
