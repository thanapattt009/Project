import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdduserheadPageRoutingModule } from './adduserhead-routing.module';

import { AdduserheadPage } from './adduserhead.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdduserheadPageRoutingModule
  ],
  declarations: [AdduserheadPage]
})
export class AdduserheadPageModule {}
