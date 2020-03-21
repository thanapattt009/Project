import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Updateuserhead2PageRoutingModule } from './updateuserhead2-routing.module';

import { Updateuserhead2Page } from './updateuserhead2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Updateuserhead2PageRoutingModule
  ],
  declarations: [Updateuserhead2Page]
})
export class Updateuserhead2PageModule {}
