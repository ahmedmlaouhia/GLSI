import { Component } from '@angular/core';
import { Administration } from '../../models/Administration';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministrationService } from '../../services/administration.service';

@Component({
  selector: 'app-edit-administration',

  templateUrl: './edit-administration.component.html',
  styleUrl: './edit-administration.component.css',
})
export class EditAdministrationComponent {

  staff: Administration = { id: 0, nom: '', prenom: '', fonction: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cadreAdministratifService: AdministrationService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const staffId = +params['id']; // Extract id from route parameter
      this.loadStaff(staffId);
    });
  }

  loadStaff(staffId: number): void {
    this.cadreAdministratifService.getAdministrationById(staffId).subscribe(staff => {
      this.staff = staff;
    });
  }

  onSubmit(): void {
    console.log(this.staff);
    
    this.cadreAdministratifService.updateAdministration(this.staff).subscribe(
      () => {
        console.log('Staff updated successfully');
        this.router.navigate(['administration']);
      },
      (error) => {
        console.error('Error updating staff:', error);
      }
    );
  }
}
