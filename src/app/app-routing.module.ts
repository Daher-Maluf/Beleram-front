import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostComponent } from './componentes/posts/post/post.component'

const routes: Routes = [
    {path: '', redirectTo:'/home', pathMatch:'full'},
    {
    path: 'home',
    loadChildren: () =>
      import('./componentes/pages/home/home.module').then(m => m.HomeModule)
  },

  {path: 'post/:id', component: PostComponent},
    { path: 'about',
     loadChildren: () => 
       import('./componentes/pages/about/about.module').then(m => m.AboutModule) 
      },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
