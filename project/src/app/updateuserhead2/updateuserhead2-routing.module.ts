import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Updateuserhead2Page } from './updateuserhead2.page';

const routes: Routes = [
  {
    path: '',
    component: Updateuserhead2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Updateuserhead2PageRoutingModule {}
