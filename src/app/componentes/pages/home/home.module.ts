import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../../../material.module';
import { registerLocaleData } from '@angular/common';
import   localEs from '@angular/common/locales/es-AR';

registerLocaleData(localEs);


@NgModule({
  declarations: [ HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-AR'
    }
  ]
  
})
export class HomeModule { }
