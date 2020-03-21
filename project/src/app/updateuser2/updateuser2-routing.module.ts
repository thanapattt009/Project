import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Updateuser2Page } from './updateuser2.page';

const routes: Routes = [
  {
    path: '',
    component: Updateuser2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Updateuser2PageRoutingModule {}
