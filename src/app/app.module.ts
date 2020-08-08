import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//modulos


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './compartido/componentes/toolbar/toolbar.component';




@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
   

   
  ],
  imports: [
    
    BrowserModule,
    RouterModule,
   AppRoutingModule,
   BrowserAnimationsModule,
   MaterialModule,
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
