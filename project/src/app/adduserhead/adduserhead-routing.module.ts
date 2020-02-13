import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdduserheadPage } from './adduserhead.page';

const routes: Routes = [
  {
    path: '',
    component: AdduserheadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdduserheadPageRoutingModule {}
