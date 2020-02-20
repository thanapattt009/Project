import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisteruserheadPage } from './registeruserhead.page';

const routes: Routes = [
  {
    path: '',
    component: RegisteruserheadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisteruserheadPageRoutingModule {}
