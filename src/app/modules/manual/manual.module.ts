import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManualRoutingModule } from './manual-routing.module';
import { ManualLandingComponent } from './pages/manual-landing/manual-landing.component';
import { ManualOverviewComponent } from './pages/manual-overview/manual-overview.component';
import { ManualVisualizerComponent } from './pages/manual-visualizer/manual-visualizer.component';

import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './components/menu/menu.component';
import { SidebarModule } from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button'


@NgModule({
  declarations: [
    ManualLandingComponent,
    ManualOverviewComponent,
    ManualVisualizerComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    ManualRoutingModule,
    SharedModule,
    SidebarModule,
    TooltipModule,
    InputTextModule,
    ButtonModule
    
  ]
})
export class ManualModule { }
