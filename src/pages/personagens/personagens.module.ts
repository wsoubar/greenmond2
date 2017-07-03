import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonagensPage } from './personagens';

@NgModule({
  declarations: [
    PersonagensPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonagensPage),
  ],
  exports: [
    PersonagensPage
  ]
})
export class PersonagensPageModule {}
