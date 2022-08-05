import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RecoverComponent } from './pages/recover/recover.component';
import { RegisterComponent } from './pages/register/register.component';
import { RestoreComponent } from './pages/restore/restore.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { VerificationComponent } from './pages/verification/verification.component';
import { TooltipModule } from 'primeng/tooltip';
import { BackHomeComponent } from './components/back-home/back-home.component';

@NgModule({
  declarations: [
    RegisterComponent, 
    SignInComponent, 
    RecoverComponent, 
    RestoreComponent, 
    VerificationComponent, 
    BackHomeComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    TooltipModule,

  ],
  exports: [
    RegisterComponent, 
    SignInComponent, 
    RecoverComponent, 
    RestoreComponent, 
    VerificationComponent,
    BackHomeComponent
  ]
})
export class AuthenticationModule { }
