import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {SignUpPage} from "./signUp";

@NgModule({
  declarations: [
    SignUpPage,
  ],
  imports: [
    IonicPageModule.forChild(SignUpPage),
  ],
})
export class SignUpPageModule {}
