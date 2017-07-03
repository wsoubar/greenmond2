import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AdMob } from '@ionic-native/admob';

/*
  Generated class for the ServAdMobProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
interface AdMobType {
    banner: string,
    interstitial: string
};


@Injectable()
export class ServAdMobProvider {
    
    private admobid: AdMobType;
    
    constructor(public http: Http, private admob: AdMob, platform: Platform) {
        console.log('Hello ServAdMobProvider Provider');

        if (/(android)/i.test(navigator.userAgent)) {
            this.admobid = {
                banner: '',
                interstitial: ''
            };
        }

    }

    createBanner () {
        this.admob.createBanner({
            adId: this.admobid.banner,
            isTesting: true,
            autoShow: true 
        });
    }

}
