import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TaskComponent } from './task/task.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { EditTaskComponent } from './edit-task/edit-task.component';


const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'tasks', component: TaskComponent},
  { path: 'edit-task/:id', component: EditTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
