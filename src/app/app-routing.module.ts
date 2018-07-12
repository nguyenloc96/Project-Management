import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ShowProjectComponent } from './show-project/show-project.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { NoteProjectComponent } from './note-project/note-project.component';

import { UserProjectsComponent } from '../app/user/user-projects/user-projects.component';
import { UserNotesComponent } from '../app/user/user-notes/user-notes.component';
import { UserDashboardComponent } from '../app/user/user-dashboard/user-dashboard.component';
import { UserCreateNoteComponent } from '../app/user/user-create-note/user-create-note.component';
import { UserProjectDetailComponent } from '../app/user/user-project-detail/user-project-detail.component';
import { GetAllProjectComponent } from './get-all-project/get-all-project.component';
import {ViewAllNotesComponent} from './view-all-notes/view-all-notes.component';
import {ViewAllUsersComponent} from './view-all-users/view-all-users.component';
import { ProjectFilterComponent } from './project-filter/project-filter.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'my-dashboard', component: MyDashboardComponent },
    { path: 'create-project', component: CreateProjectComponent },
    { path: 'create-note', component: CreateNoteComponent },
    { path: 'add-user', component: AddUserComponent },
    { path: 'add-user/:id', component: AddUserComponent },
    { path: 'show-project', component: ShowProjectComponent },
    { path: 'show-user', component: ShowUserComponent },
    { path: 'note-project/:id', component: NoteProjectComponent },
    { path: 'project-detail/:id', component: ProjectDetailComponent },
    { path: 'user', component: UserDashboardComponent },
    { path: 'user/user-projects', component: UserProjectsComponent },
    { path: 'user/user-notes', component: UserNotesComponent },
    { path: 'user/user-create-note', component: UserCreateNoteComponent },
    { path: 'user/user-project-detail/:id', component: UserProjectDetailComponent },
    { path: 'project-filter', component: ProjectFilterComponent},
    { path: 'view-all-notes', component: ViewAllNotesComponent},
    { path: 'view-all-users', component: ViewAllUsersComponent},

    { path: 'get-all-project', component: GetAllProjectComponent},
    { path: 'view-all-notes', component: ViewAllNotesComponent},



];
@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {
    
}

