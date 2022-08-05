import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TitleComponent } from './components/title/title.component';
import { CardsComponent } from './components/cards/cards.component';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';

import { TableModule } from 'primeng/table'
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './pages/users/users.component';
import { UserManualsComponent } from './pages/user-manuals/user-manuals.component';
import { ReleaseNotesComponent } from './pages/release-notes/release-notes.component';
import { ArticlesComponent } from './pages/articles/articles.component';

@NgModule({
  declarations: [
    HomeComponent, 
    HeaderComponent, 
    FooterComponent, 
    TitleComponent, 
    CardsComponent, 
    UsersComponent, UserManualsComponent, ReleaseNotesComponent, ArticlesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ButtonModule,
    MenubarModule,
    SidebarModule,
    TooltipModule,
    InputTextModule,
    TableModule,
    FormsModule
  ],
  exports: [
    HomeComponent, 
    HeaderComponent, 
    FooterComponent, 
    TitleComponent, 
    CardsComponent, 
    UsersComponent
  ]
})
export class DashboardModule { }
