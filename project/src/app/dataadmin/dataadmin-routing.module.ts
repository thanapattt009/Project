import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataadminPage } from './dataadmin.page';

const routes: Routes = [
  {
    path: '',
    component: DataadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataadminPageRoutingModule {}
