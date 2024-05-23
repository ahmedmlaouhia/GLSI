import { Component, OnInit } from '@angular/core';
import { AdministrationService } from '../../services/administration.service';
import { Router } from '@angular/router';
import { Administration } from '../../models/Administration';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-administrations',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css'],
})
export class AdministrationComponent implements OnInit {
 
  constructor(private cadreAdministratifService: AdministrationService, private router: Router) { }
  staffDetails: Administration[] = [];

  ngOnInit(): void {
    this.loadStaff();
  }

  loadStaff() {
    this.cadreAdministratifService.getCadresAdministratifs().subscribe(
      (resp: any) => {
        console.log('API Response:', resp);

        if (resp && Array.isArray(resp)) {
          this.staffDetails = resp;
        } else {
          console.error('Invalid response structure. Expected an array.');
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  editStaff(staffId: number): void {
    this.router.navigate(['/edit-cadre-administratif', staffId]);
  }

  deleteStaff(staffId: number): void {
    this.cadreAdministratifService.deleteAdministration(staffId).subscribe(
      () => {
        console.log('Staff deleted successfully');
        this.loadStaff();
      },
      (error: HttpErrorResponse) => {
        console.error('Error deleting staff:', error);
      }
    );
  }
}
