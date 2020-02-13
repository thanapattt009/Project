import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateadminPage } from './updateadmin.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateadminPageRoutingModule {}
