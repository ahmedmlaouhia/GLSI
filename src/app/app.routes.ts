import { RouterModule, Routes } from '@angular/router';

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
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'students/add', component: AddStudentComponent },
  { path: 'students/edit/:id', component: EditStudentComponent },
  { path: 'administration', component: AdministrationComponent },
  { path: 'administration/add', component: AddAdministrationComponent },
  { path: 'administration/edit/:id', component: EditAdministrationComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'teachers/add', component: AddTeacherComponent },
  { path: 'teachers/edit/:id', component: EditTeacherComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
