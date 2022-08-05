import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { RecoverComponent } from './pages/recover/recover.component';
import { RegisterComponent } from './pages/register/register.component';
import { RestoreComponent } from './pages/restore/restore.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { VerificationComponent } from './pages/verification/verification.component';



const routes: Routes = [
  {
    path: '',
    children: [
      { path:'recover', component: RecoverComponent },
      { path:'register', component: RegisterComponent },
      { path:'restore', component: RestoreComponent },
      { path:'sign-in', component: SignInComponent },
      { path:'verification', component: VerificationComponent },
      { path:'**', redirectTo: 'sign-in' },
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AuthenticationRoutingModule { }
