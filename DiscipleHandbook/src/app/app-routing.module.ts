import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleControlerComponent } from './article-controler/article-controler.component';


const routes: Routes = [
  {path: 'articles/:id', component: ArticleControlerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
