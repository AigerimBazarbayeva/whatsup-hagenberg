import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoginPage} from '../login/login'

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let _this;

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.item = navParams.get('item');
    //noinspection JSAnnotator
    _this = this.navCtrl;
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'LOGIN REQUIRED',
      message: "For joining an event, you have to be logged in.",
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
            console.log('Login clicked');
            showLoginPage();
          }
        }
      ]
    });
    prompt.present();

    function showLoginPage() {
      console.log();
      _this.push(LoginPage, {
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }


}
