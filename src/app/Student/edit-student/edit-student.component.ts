
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../models/Student';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-edit-student',

  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css',
})
export class EditStudentComponent implements OnInit {
student: Student = {
    id: 0,
    nom: '',
    prenom: '',
    classe: '',
    reussite: false,
    nbAbsences: 0,
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private etudiantService: StudentsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const userId = +params['id']; // Extract id from route parameter
      this.loadUser(userId);
    });
  }

  loadUser(userId: number): void {
    this.etudiantService.getUserById(userId).subscribe((user) => {
      this.student = user;
    });
  }

  onSubmit(): void {
    console.log(this.student);

    this.etudiantService.updateUser(this.student).subscribe(
      () => {
        console.log('User updated successfully');
        this.router.navigate(['students']);
      },
      (error) => {
        console.error('Error updating user:', error);
      }
    );
  }
}
