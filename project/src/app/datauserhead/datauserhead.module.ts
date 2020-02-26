import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatauserheadPageRoutingModule } from './datauserhead-routing.module';

import { DatauserheadPage } from './datauserhead.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatauserheadPageRoutingModule
  ],
  declarations: [DatauserheadPage]
})
export class DatauserheadPageModule {}
