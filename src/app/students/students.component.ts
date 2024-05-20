import { Component } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { Router } from '@angular/router';
import { Student } from '../models/Student';
import { HttpErrorResponse } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [NgFor],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  constructor(
    private studentService: StudentsService,
    private router: Router
  ) {}
  userDetails: Student[] = [];
  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers() {
    this.studentService.getUserDetails().subscribe(
      (resp: any) => {
        console.log('API Response:', resp);

        if (resp && Array.isArray(resp)) {
          this.userDetails = resp;
        } else {
          console.error('Invalid response structure. Expected an array.');
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  editUser(userId: number): void {
    this.router.navigate(['/edit', userId]);
  }

  deleteUser(userId: number): void {
    this.studentService.deleteUser(userId).subscribe(
      () => {
        console.log('User deleted successfully');
        this.loadUsers();
      },
      (error: HttpErrorResponse) => {
        console.error('Error deleting user:', error);
      }
    );
  }
}
