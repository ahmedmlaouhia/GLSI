import { Component, OnInit } from '@angular/core';
import { Teacher } from './../../models/Teacher';
import { ActivatedRoute, Router } from '@angular/router';
import { TeachersService } from '../../services/teachers.service';

@Component({
  selector: 'app-edit-teacher',

  templateUrl: './edit-teacher.component.html',
  styleUrl: './edit-teacher.component.css',
})
export class EditTeacherComponent implements OnInit {
  teacher: Teacher = { id: 0, nom: '', prenom: '', matiere: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private enseignantService: TeachersService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const teacherId = +params['id']; // Extract id from route parameter
      this.loadTeacher(teacherId);
    });
  }

  loadTeacher(teacherId: number): void {
    this.enseignantService.getTeacherById(teacherId).subscribe(teacher => {
      this.teacher = teacher;
    });
  }

  onSubmit(): void {
    console.log(this.teacher);
    
    this.enseignantService.updateTeacher(this.teacher).subscribe(
      () => {
        console.log('Teacher updated successfully');
        this.router.navigate(['teachers']);
      },
      (error) => {
        console.error('Error updating teacher:', error);
      }
    );
  }






}
