import { UtilProvider } from './../../providers/util/util';
import { IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';

@IonicPage( { name: 'tabs-page' } )
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'CidadePage';
  tab2Root = 'NpcsPage';
  tab3Root = 'PersonagensPage';

  constructor(util: UtilProvider) {
    util.sayHello('Wagner');
  }
}
