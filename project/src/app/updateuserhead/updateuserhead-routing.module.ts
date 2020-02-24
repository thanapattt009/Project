import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateuserheadPage } from './updateuserhead.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateuserheadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateuserheadPageRoutingModule {}
