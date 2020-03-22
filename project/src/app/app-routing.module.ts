import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
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
    path: 'dataadmin',
    loadChildren: () => import('./dataadmin/dataadmin.module').then( m => m.DataadminPageModule)
  },
  {
    path: 'updateadmin',
    loadChildren: () => import('./updateadmin/updateadmin.module').then( m => m.UpdateadminPageModule)
  },
  {
    path: 'registeruser',
    loadChildren: () => import('./registeruser/registeruser.module').then( m => m.RegisteruserPageModule)
  },
  {
    path: 'registeruserhead',
    loadChildren: () => import('./registeruserhead/registeruserhead.module').then( m => m.RegisteruserheadPageModule)
  },
  {
    path: 'datauser',
    loadChildren: () => import('./datauser/datauser.module').then( m => m.DatauserPageModule)
  },
  {
    path: 'datauserhead',
    loadChildren: () => import('./datauserhead/datauserhead.module').then( m => m.DatauserheadPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'updateuser2',
    loadChildren: () => import('./updateuser2/updateuser2.module').then( m => m.Updateuser2PageModule)
  },  {
    path: 'updateuserhead2',
    loadChildren: () => import('./updateuserhead2/updateuserhead2.module').then( m => m.Updateuserhead2PageModule)
  },
  {
    path: 'datapass',
    loadChildren: () => import('./datapass/datapass.module').then( m => m.DatapassPageModule)
  },
  {
    path: 'timetable',
    loadChildren: () => import('./timetable/timetable.module').then( m => m.TimetablePageModule)
  }






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
