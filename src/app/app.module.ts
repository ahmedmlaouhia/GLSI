import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './Student/students/students.component';
import { AddStudentComponent } from './Student/add-student/add-student.component';
import { EditStudentComponent } from './Student/edit-student/edit-student.component';
import { AdministrationComponent } from './Administrations/administration/administration.component';
import { AddAdministrationComponent } from './Administrations/add-administration/add-administration.component';
import { EditAdministrationComponent } from './Administrations/edit-administration/edit-administration.component';
import { AddTeacherComponent } from './Teacher/add-teacher/add-teacher.component';
import { EditTeacherComponent } from './Teacher/edit-teacher/edit-teacher.component';
import { TeachersComponent } from './Teacher/teachers/teachers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, routes } from './app.routes';
import { LoginComponent } from './auth/login/login.component';
import { NavbarService } from './services/navbar.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    StudentsComponent,
    AddAdministrationComponent,
    AddStudentComponent,
    AddTeacherComponent,
    TeachersComponent,
    EditAdministrationComponent,
    EditStudentComponent,
    EditTeacherComponent,
    AdministrationComponent,
    DashboardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [NavbarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
