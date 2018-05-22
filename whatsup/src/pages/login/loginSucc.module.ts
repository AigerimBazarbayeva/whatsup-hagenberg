import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginSuccPage} from './loginSucc';
import { EventPage } from '../home/home'

@NgModule({
  declarations: [
    LoginSuccPage,
    EventPage
  ],
  imports: [
    IonicPageModule.forChild(LoginSuccPage),
  ],
})
export class loginSuccModulePageModule {}
