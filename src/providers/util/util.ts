import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UtilProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UtilProvider {

  constructor() {
    console.log('Hello UtilProvider Provider');
  }

  sayHello(name: string) {
    console.log('Hello, '+ name);
  }

}
