import { Component, OnInit } from '@angular/core';
import { Administration } from '../../models/Administration';
import { Router } from '@angular/router';
import { AdministrationService } from '../../services/administration.service';

@Component({
  selector: 'app-add-administration',

  templateUrl: './add-administration.component.html',
  styleUrl: './add-administration.component.css',
})
export class AddAdministrationComponent implements OnInit {

  administration: Administration = { nom: '', prenom: '', fonction: '' };

  constructor(
    private router: Router,
    private cadreAdministratifService: AdministrationService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.administration);
    
    this.cadreAdministratifService.addAdministration(this.administration).subscribe(
      () => {
        console.log('Staff added successfully');
        this.router.navigate(['administration']);
      },
      (error) => {
        console.error('Error adding staff:', error);
      }
    );
  }
}

