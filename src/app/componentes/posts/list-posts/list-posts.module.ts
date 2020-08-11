import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPostsRoutingModule } from './list-posts-routing.module';
import { ListPostsComponent } from './list-posts.component';
import { MaterialModule } from '../../../material.module';
import {TablaComponent} from '../../../compartido/componentes/tabla/tabla.component'



@NgModule({
  declarations: [ListPostsComponent, TablaComponent],
  imports: [
    CommonModule,
    ListPostsRoutingModule,
    MaterialModule,
    
  ]
})
export class ListPostsModule { }
