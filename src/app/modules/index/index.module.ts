import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';

import { SharedModule } from '../shared/shared.module';

import { CategoriesBlogComponent } from './pages/categories-blog/categories-blog.component';
import { ArticleComponent } from './pages/article/article.component';
import { HomeComponent } from './pages/home/home.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';
import { AppItemComponent } from './components/app-item/app-item.component';

import { AppNoteletComponent } from './components/app-notelet/app-notelet.component';
import { ManualModule } from '../manual/manual.module';
import { AppCcardComponent } from './components/app-ccard/app-ccard.component';
import { ReleaseComponent } from './pages/release/release.component';

@NgModule({
  declarations: [
    HomeComponent,
    CategoriesBlogComponent,
    ArticleComponent,

    // Shared components 
    AppItemComponent,
    AppNoteletComponent,
    AppCcardComponent,
    ReleaseComponent,

  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    SharedModule,
    ButtonModule,
    MenubarModule,
    SidebarModule,
    InputTextModule,
    TooltipModule,
    ManualModule,

  ],
  exports: [
    HomeComponent,
    CategoriesBlogComponent,
    ArticleComponent,

    // Shared components 
    AppItemComponent,
    AppNoteletComponent,
  ]
})
export class IndexModule { }
