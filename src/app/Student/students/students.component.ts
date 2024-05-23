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
  userDetails: Student[] = [];

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
  }}
// }
