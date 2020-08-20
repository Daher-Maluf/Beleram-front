import { AdminComponent } from './componentes/admin/admin.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
// modulos
=======
import { FormsModule } from "@angular/forms"
//modulos
>>>>>>> aa02e2683976d1c051d1aff51bb0a1fb2bbc67de


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './compartido/componentes/toolbar/toolbar.component';
import { ContainerAppComponent } from './componentes/pages/container-app/container-app.component';





@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ContainerAppComponent,




  ],
  imports: [

   BrowserModule,
   RouterModule,
   AppRoutingModule,
   BrowserAnimationsModule,
   MaterialModule,
   HttpClientModule,
<<<<<<< HEAD
   CommonModule


=======
   CommonModule,
   FormsModule,
   RouterModule.forRoot([
     {path: "", redirectTo: "/", pathMatch: "full"},
     {path: "login", component: LoginComponent},
     {path: "admin", component: AdminComponent}
   ])
   
   
>>>>>>> aa02e2683976d1c051d1aff51bb0a1fb2bbc67de
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
