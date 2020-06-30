import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { ConfirmPasswordDirective } from './validators/confirm-password.directive';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    RegisterComponent,
    EditTaskComponent,
    /* ConfirmPasswordDirective */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
