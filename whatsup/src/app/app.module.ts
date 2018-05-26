import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { EventPage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';
import { LoginPage } from '../pages/login/login';
import {SignUpPage} from "../pages/login/signUp";
import {LoginSuccPage} from "../pages/login/loginSucc";
import {ProfilePage} from "../pages/profile/profile";



// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuth} from "angularfire2/auth";


// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyCjOea4AeNGf8dS_LfdeayAEcZqU7svepI",
  authDomain: "whatsup-hagenberg-9c919.firebaseapp.com",
  databaseURL: "https://whatsup-hagenberg-9c919.firebaseio.com",
  projectId: "whatsup-hagenberg-9c919",
  storageBucket: "whatsup-hagenberg-9c919.appspot.com",
  messagingSenderId: "201113993607"
};

@NgModule({
  declarations: [
    MyApp,
    EventPage,
    DetailPage,
    LoginPage,
    SignUpPage,
    LoginSuccPage,
    ProfilePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventPage,
    DetailPage,
    LoginPage,
    SignUpPage,
    LoginSuccPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth
  ]
})
export class AppModule {}
