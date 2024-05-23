import { RouterModule, Routes } from '@angular/router';

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
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'students/add', component: AddStudentComponent },
  { path: 'students/edit/:id', component: EditStudentComponent },
  { path: 'administration', component: AdministrationComponent },
  { path: 'administration/add', component: AddAdministrationComponent },
  { path: 'administration/edit/:id', component: EditAdministrationComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'teachers/add', component: AddTeacherComponent },
  { path: 'teachers/edit/:id', component: EditTeacherComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
