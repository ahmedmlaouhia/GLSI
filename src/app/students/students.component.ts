import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  constructor(
    private studentService: EtudiantService,
    private router: Router
  ) {}
  userDetails: Etudiant[] = [];
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
