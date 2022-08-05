import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './pages/articles/articles.component';
import { HomeComponent } from './pages/home/home.component';
import { ReleaseNotesComponent } from './pages/release-notes/release-notes.component';
import { UserManualsComponent } from './pages/user-manuals/user-manuals.component';
import { UsersComponent } from './pages/users/users.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent },
      { path: 'users', component: UsersComponent },
      { path: 'userManuals', component: UserManualsComponent },
      { path: 'releaseNotes', component: ReleaseNotesComponent },
      { path: 'articles', component: ArticlesComponent },
      { path: '**', redirectTo: 'dashboard' },
    ]
  },
  // { path: '/users', redirectTo: 'users' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
