import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatapassPageRoutingModule } from './datapass-routing.module';

import { DatapassPage } from './datapass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatapassPageRoutingModule
  ],
  declarations: [DatapassPage]
})
export class DatapassPageModule {}
