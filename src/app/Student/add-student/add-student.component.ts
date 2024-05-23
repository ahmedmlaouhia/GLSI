import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/Student';
import { Router } from '@angular/router';
import { StudentsService } from '../../services/students.service';


@Component({
  selector: 'app-add-student',

  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css',
})
export class AddStudentComponent implements OnInit {
    student:  Student = { nom: '', prenom: '', classe: '', reussite: false, nbAbsences: 0 };
  
    constructor(
      private router: Router,
      private etudiantService: StudentsService
    ) { }
  
    ngOnInit(): void {
    }
  onSubmit(): void {
    console.log(this.student);
    
    this.etudiantService.addEtudiant(this.student).subscribe(
      () => {
        console.log('Student added successfully');
        this.router.navigate(['students']);
      },
      (error) => {
        console.error('Error adding student:', error);
      }
    );
  }




}

