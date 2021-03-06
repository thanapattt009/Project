import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisteruserPageRoutingModule } from './registeruser-routing.module';

import { RegisteruserPage } from './registeruser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegisteruserPageRoutingModule
  ],
  declarations: [RegisteruserPage]
})
export class RegisteruserPageModule {}
