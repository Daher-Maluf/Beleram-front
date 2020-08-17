import { ListPostsComponent } from './componentes/posts/list-posts/list-posts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostComponent } from './componentes/posts/post/post.component';
import { ContainerAppComponent } from './componentes/pages/container-app/container-app.component';


const routes: Routes = [
    {path: '', component: ContainerAppComponent,
      children: [
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
        {path: '', redirectTo: 'home',
                  pathMatch: 'full'
         }

      ]
    },

    { path: 'admin', loadChildren: () => import('./componentes/admin/admin.module').then(m => m.AdminModule) },
    { path: 'login', loadChildren: () => import('./componentes/auth/login/login.module').then(m => m.LoginModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
