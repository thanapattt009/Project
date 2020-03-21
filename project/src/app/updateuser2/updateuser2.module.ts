import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Updateuser2PageRoutingModule } from './updateuser2-routing.module';

import { Updateuser2Page } from './updateuser2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Updateuser2PageRoutingModule
  ],
  declarations: [Updateuser2Page]
})
export class Updateuser2PageModule {}
