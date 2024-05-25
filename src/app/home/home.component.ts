import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexXAxis,
} from 'ng-apexcharts';
import { KpiService } from '../services/kpi.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private kpiService: KpiService) {}
  averageAbsences: number = 0;
  passRate: number = 0;
  totalStudents: number = 0;
  totalTeachers: number = 0;
  totalAdmins: number = 0;
  successByClass: { [key: string]: number } = {};
  studentsByClass: { [key: string]: number } = {};
  teachersBySubject: { [key: string]: number } = {};
  absencesByClass: { [key: string]: number } = {};

  studentsByClassChart: ChartOptions = {
    series: [
      {
        name: 'Number of students',
        data: Object.values(this.studentsByClass),
      },
    ],
    chart: {
      height: 350,
      type: 'line',
    },
    xaxis: {
      categories: Object.keys(this.studentsByClass),
    },
    title: {
      text: 'Students by class',
    },
  };

  teachersBySubjectChart: ChartOptions = {
    series: [
      {
        name: 'Number of Teachers',
        data: Object.values(this.studentsByClass),
      },
    ],
    chart: {
      height: 350,
      type: 'line',
    },
    xaxis: {
      categories: Object.keys(this.studentsByClass),
    },
    title: {
      text: 'Teachers by subject',
    },
  };

  absencesByClassChart: ChartOptions = {
    series: [
      {
        name: 'Number of Absences',
        data: Object.values(this.absencesByClass),
      },
    ],
    chart: {
      height: 350,
      type: 'line',
    },
    xaxis: {
      categories: Object.keys(this.absencesByClass),
    },
    title: {
      text: 'Absences by class',
    },
  };

  ngOnInit(): void {
    this.loadPassRate();
    this.loadAverageAbsences();
    this.loadAbsencesByClass();
    this.loadStudentsByClass();
    this.loadTeachersBySubject();
  }

  loadPassRate(): void {
    this.kpiService.getPassRate().subscribe(
      (resp: number) => {
        this.passRate = resp;
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching pass rate:', error);
      }
    );
  }

  loadAverageAbsences(): void {
    this.kpiService.getAverageAbsences().subscribe(
      (resp: number) => {
        this.averageAbsences = resp;
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching average absences:', error);
      }
    );
  }

  loadAbsencesByClass(): void {
    this.kpiService.getAbsencesByClass().subscribe(
      (resp: { [key: string]: number }) => {
        this.absencesByClass = resp;
        this.absencesByClassChart = {
          ...this.absencesByClassChart,
          series: [
            {
              name: 'Number of Absences',
              data: Object.values(this.absencesByClass),
            },
          ],
          xaxis: {
            categories: Object.keys(this.absencesByClass),
          },
        };
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching absences by class:', error);
      }
    );
  }

  loadTeachersBySubject(): void {
    this.kpiService.getTeachersBySubject().subscribe(
      (resp: { [key: string]: number }) => {
        this.studentsByClass = resp;
        this.totalTeachers = Object.values(this.studentsByClass).reduce(
          (acc, curr) => acc + curr,
          0
        );
        this.teachersBySubjectChart = {
          ...this.teachersBySubjectChart,
          series: [
            {
              name: 'Number of Teachers',
              data: Object.values(this.studentsByClass),
            },
          ],
          xaxis: {
            categories: Object.keys(this.studentsByClass),
          },
        };
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching teachers by subject:', error);
      }
    );
  }

  loadStudentsByClass(): void {
    this.kpiService.getStudentsByClass().subscribe(
      (resp: { [key: string]: number }) => {
        this.studentsByClass = resp;
        this.totalStudents = Object.values(this.studentsByClass).reduce(
          (acc, curr) => acc + curr,
          0
        );
        this.studentsByClassChart = {
          ...this.studentsByClassChart,
          series: [
            {
              name: 'Number of students',
              data: Object.values(this.studentsByClass),
            },
          ],
          xaxis: {
            categories: Object.keys(this.studentsByClass),
          },
        };
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching students by class:', error);
      }
    );
  }
}
