import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './/app-routing.module';
import { CreateProjectComponent } from './create-project/create-project.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddUserComponent } from './add-user/add-user.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { ShowProjectComponent } from './show-project/show-project.component';
import { ShowUserComponent } from './show-user/show-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CreateProjectComponent,
    DashboardComponent,
    AddUserComponent,
    CreateNoteComponent,
    MyDashboardComponent,
    ShowProjectComponent,
    ShowUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
