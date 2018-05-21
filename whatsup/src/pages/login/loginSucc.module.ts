import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginSuccPage} from './loginSucc';

@NgModule({
  declarations: [
    LoginSuccPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginSuccPage),
  ],
})
export class loginSuccModulePageModule {}
