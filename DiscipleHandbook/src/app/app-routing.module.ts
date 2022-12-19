import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleControlerComponent } from './article-controler/article-controler.component';
import { MainMenuComponent } from './main-menu/main-menu.component';


const routes: Routes = [
  {path: 'articles/:id', component: ArticleControlerComponent},
  {path: '', component: MainMenuComponent},
  {path: '**', component: MainMenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
