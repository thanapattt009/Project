import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateadminPageRoutingModule } from './updateadmin-routing.module';

import { UpdateadminPage } from './updateadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateadminPageRoutingModule
  ],
  declarations: [UpdateadminPage]
})
export class UpdateadminPageModule {}
