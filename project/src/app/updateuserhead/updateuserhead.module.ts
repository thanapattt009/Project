import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateuserheadPageRoutingModule } from './updateuserhead-routing.module';

import { UpdateuserheadPage } from './updateuserhead.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateuserheadPageRoutingModule
  ],
  declarations: [UpdateuserheadPage]
})
export class UpdateuserheadPageModule {}
