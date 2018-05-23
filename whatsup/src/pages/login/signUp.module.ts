import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {SignUpPage} from "./signUp";
import {EventPage} from "../home/home";

@NgModule({
  declarations: [
    SignUpPage,
    EventPage
  ],
  imports: [
    IonicPageModule.forChild(SignUpPage),
  ],
})
export class SignUpPageModule {}
