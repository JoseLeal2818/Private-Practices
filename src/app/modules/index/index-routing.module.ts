import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './pages/article/article.component';
import { CategoriesBlogComponent } from './pages/categories-blog/categories-blog.component';
import { HomeComponent } from './pages/home/home.component';
import { ReleaseComponent } from './pages/release/release.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent },
      { path: 'categories', component: CategoriesBlogComponent },
      { path: 'article', component: ArticleComponent },
      { path: 'release', component: ReleaseComponent },
      {
        path: 'manual',
        loadChildren: () => import('../manual/manual.module').then(m => m.ManualModule),
      },
      { path: '**', redirectTo: '' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
