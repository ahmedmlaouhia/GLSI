import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { AdministrationComponent } from './administration/administration.component';
import { AddAdministrationComponent } from './add-administration/add-administration.component';
import { EditAdministrationComponent } from './edit-administration/edit-administration.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { TeachersComponent } from './teachers/teachers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, routes } from './app.routes';

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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
