
import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../../services/teachers.service';
import { Router } from '@angular/router';
import { Teacher } from '../../models/Teacher';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
})
export class TeachersComponent implements OnInit {
  teacherDetails: Teacher[] = [];

  constructor(private teacherService: TeachersService, public router: Router) {}

  ngOnInit(): void {
    this.loadTeachers();
  }

  private loadTeachers(): void {
    this.teacherService.getTeachers().subscribe(
      (resp: Teacher[]) => {
        console.log('API Response:', resp);

        if (resp && Array.isArray(resp)) {
          this.teacherDetails = resp;
        } else {
          console.error('Invalid response structure. Expected an array.');
        }
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching teacher details:', error.message);
      }
    );
  }

  deleteTeacher(teacherId: number): void {
    this.teacherService.deleteTeacher(teacherId).subscribe(
      () => {
        console.log('Teacher deleted successfully');
        this.loadTeachers();
      },
      (error: HttpErrorResponse) => {
        console.error('Error deleting teacher:', error.message);
      }
    );
  }
}
