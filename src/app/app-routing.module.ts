import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { IndexModule } from './modules/index/index.module';
import { HomeComponent } from './modules/index/pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'  },
  {
    path: 'home',
    loadChildren: () => import('./modules/index/index.module').then( m => m.IndexModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/authentication/authentication.module').then( m => m.AuthenticationModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then( m => m.DashboardModule),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
