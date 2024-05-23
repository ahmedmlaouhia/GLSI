import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../models/Teacher';
import { Router } from '@angular/router';
import { TeachersService } from '../../services/teachers.service';

@Component({
  selector: 'app-add-teacher',

  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.css',
})
export class AddTeacherComponent implements OnInit{

  teacher: Teacher = { nom: '', prenom: '', matiere: '' };

  constructor(
    private router: Router,
    private enseignantService: TeachersService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.teacher);
    
    this.enseignantService.addTeacher(this.teacher).subscribe(
      () => {
        console.log('Teacher added successfully');
        this.router.navigate(['teachers']);
      },
      (error) => {
        console.error('Error adding teacher:', error);
      }
    );
  }



}
