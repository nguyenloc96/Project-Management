import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { HttpModule } from '@angular/http';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { UserProjectsComponent } from './user/user-projects/user-projects.component';
import { UserNotesComponent } from './user/user-notes/user-notes.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserCreateNoteComponent } from './user/user-create-note/user-create-note.component';
import { NoteProjectComponent } from './note-project/note-project.component';
import { UserProjectDetailComponent } from './user/user-project-detail/user-project-detail.component';
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
        ShowUserComponent,
        ProjectDetailComponent,
        UserProjectsComponent,
        UserNotesComponent,
        UserDashboardComponent,
        UserCreateNoteComponent,
        NoteProjectComponent,
        UserProjectDetailComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
