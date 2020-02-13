import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'adduser',
    loadChildren: () => import('./adduser/adduser.module').then( m => m.AdduserPageModule)
  },
  {
    path: 'adduserhead',
    loadChildren: () => import('./adduserhead/adduserhead.module').then( m => m.AdduserheadPageModule)
  },
  {
    path: 'dataadmin',
    loadChildren: () => import('./dataadmin/dataadmin.module').then( m => m.DataadminPageModule)
  },
  {
    path: 'updateadmin',
    loadChildren: () => import('./updateadmin/updateadmin.module').then( m => m.UpdateadminPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
