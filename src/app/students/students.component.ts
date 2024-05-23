import { Component } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { Router } from '@angular/router';
import { Student } from '../models/Student';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  constructor(
    private studentService: StudentsService,
    private router: Router
  ) {}

  userDetails: Student[] = [
    {
      id: 1,
      nom: 'Doe',
      prenom: 'John',
      classe: 'A',
      nbAbsences: 3,
      Reussite: true,
    },
    {
      id: 2,
      nom: 'Smith',
      prenom: 'Jane',
      classe: 'B',
      nbAbsences: 5,
      Reussite: false,
    },
    {
      id: 3,
      nom: 'Doe',
      prenom: 'John',
      classe: 'A',
      nbAbsences: 3,
      Reussite: true,
    },
    {
      id: 4,
      nom: 'Smith',
      prenom: 'Jane',
      classe: 'B',
      nbAbsences: 5,
      Reussite: false,
    },
    {
      id: 5,
      nom: 'Doe',
      prenom: 'John',
      classe: 'A',
      nbAbsences: 3,
      Reussite: true,
    },
    {
      id: 6,
      nom: 'Smith',
      prenom: 'Jane',
      classe: 'B',
      nbAbsences: 5,
      Reussite: false,
    },
    {
      id: 7,
      nom: 'Doe',
      prenom: 'John',
      classe: 'A',
      nbAbsences: 3,
      Reussite: true,
    },
    {
      id: 8,
      nom: 'Smith',
      prenom: 'Jane',
      classe: 'B',
      nbAbsences: 5,
      Reussite: false,
    },
  ];
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
