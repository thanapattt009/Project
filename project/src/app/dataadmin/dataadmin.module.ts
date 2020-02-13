import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataadminPageRoutingModule } from './dataadmin-routing.module';

import { DataadminPage } from './dataadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataadminPageRoutingModule
  ],
  declarations: [DataadminPage]
})
export class DataadminPageModule {}
