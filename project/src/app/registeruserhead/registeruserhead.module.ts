import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisteruserheadPageRoutingModule } from './registeruserhead-routing.module';

import { RegisteruserheadPage } from './registeruserhead.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisteruserheadPageRoutingModule
  ],
  declarations: [RegisteruserheadPage]
})
export class RegisteruserheadPageModule {}
