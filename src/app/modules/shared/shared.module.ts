import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PfooterComponent } from './components/pfooter/pfooter.component';
import { PheaderComponent } from './components/pheader/pheader.component';
import { SfooterComponent } from './components/sfooter/sfooter.component';
import { SheaderComponent } from './components/sheader/sheader.component';
import { AppSatisfactionComponent } from '../index/components/app-satisfaction/app-satisfaction.component';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { AppTitleComponent } from './components/app-title/app-title.component';
import { AppCardsComponent } from './components/app-cards/app-cards.component';


@NgModule({
  declarations: [
    PheaderComponent,
    SheaderComponent,
    PfooterComponent,
    SfooterComponent,
    AppTitleComponent,
    AppCardsComponent,
    AppSatisfactionComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,

    MenubarModule,
    SidebarModule,
    TooltipModule,
    InputTextModule,
    ButtonModule,

  ],
  exports: [
    PheaderComponent,
    SheaderComponent,
    PfooterComponent,
    SfooterComponent,
    AppTitleComponent,
    AppCardsComponent,
    AppSatisfactionComponent
  ],
})
export class SharedModule { }
