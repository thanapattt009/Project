import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatauserheadPage } from './datauserhead.page';

const routes: Routes = [
  {
    path: '',
    component: DatauserheadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatauserheadPageRoutingModule {}
