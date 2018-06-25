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


const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'my-dashboard', component: MyDashboardComponent },
    { path: 'create-project', component: CreateProjectComponent },
    { path: 'create-note', component: CreateNoteComponent },
    { path: 'add-user', component: AddUserComponent },
    { path: 'show-project', component: ShowProjectComponent },
    { path: 'show-user', component: ShowUserComponent },
];
@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {
    
}

