import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatapassPage } from './datapass.page';

const routes: Routes = [
  {
    path: '',
    component: DatapassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatapassPageRoutingModule {}
