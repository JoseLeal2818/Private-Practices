import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from '../index/pages/article/article.component';
import { ManualLandingComponent } from './pages/manual-landing/manual-landing.component';
import { ManualOverviewComponent } from './pages/manual-overview/manual-overview.component';
import { ManualVisualizerComponent } from './pages/manual-visualizer/manual-visualizer.component';


const routes: Routes = [
  {
    path: '', 
    children: [
      { path: '', component: ManualLandingComponent, },
      { path: 'moverview', component: ManualOverviewComponent },
      { path: 'mvisualizer', component: ManualVisualizerComponent },
      { path: '**', redirectTo: ''},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManualRoutingModule { }
