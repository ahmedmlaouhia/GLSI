import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { Router } from '@angular/router';
import { Student } from '../../models/Student';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  userDetails: Student[] = [
    {
      id: 1,
      nom: 'John',
      prenom: 'Doe',
      classe: '6th',
      nbAbsences: 3,
      reussite: true,
    },
    {
      id: 2,
      nom: 'Jane',
      prenom: 'Doe',
      classe: '6th',
      nbAbsences: 0,
      reussite: true,
    },
    {
      id: 3,
      nom: 'Alice',
      prenom: 'Smith',
      classe: '6th',
      nbAbsences: 2,
      reussite: true,
    },
    {
      id: 4,
      nom: 'Bob',
      prenom: 'Smith',
      classe: '6th',
      nbAbsences: 1,
      reussite: true,
    },
  ];

  constructor(private studentService: StudentsService, public router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }
  private loadUsers(): void {
    this.studentService.getUserDetails().subscribe(
      (resp: Student[]) => {
        console.log('API Response:', resp);

        if (resp && Array.isArray(resp)) {
          this.userDetails = resp;
        } else {
          console.error('Invalid response structure. Expected an array.');
        }
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching user details:', error.message);
      }
    );
  }

  // ngOnInit(): void {
  //   this.loadUsers();
  // }

  //   private loadUsers(): void {
  //     this.studentService.getUserDetails().subscribe(
  //       (resp: Student[]) => {
  //         console.log('API Response:', resp);
  //         if (resp && Array.isArray(resp)) {
  //           this.userDetails = resp;
  //         } else {
  //           console.error('Invalid response structure. Expected an array.');
  //         }
  //       },
  //       (error: HttpErrorResponse) => {
  //         console.error('Error fetching user details:', error.message);
  //       }
  //     );
  //   }

  //   editUser(userId: number): void {
  //     this.router.navigate(['/edit', userId]);
  //   }

  deleteUser(userId: number): void {
    this.studentService.deleteUser(userId).subscribe(
      () => {
        console.log('User deleted successfully');
        this.loadUsers();
      },
      (error: HttpErrorResponse) => {
        console.error('Error deleting user:', error.message);
      }
    );
  }
}
// }
