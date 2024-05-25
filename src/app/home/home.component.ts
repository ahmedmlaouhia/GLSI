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
  constructor(private kpiService: KpiService, private http: HttpClient) {}
  averageAbsences: number = 0;
  studentsByClass: { [key: string]: number } = {};

  chartOptions: ChartOptions = {
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

  ngOnInit(): void {
    this.loadStudentsByClass();
    this.loadAverageAbsences();
  }

  loadStudentsByClass(): void {
    this.kpiService.getStudentsByClass().subscribe(
      (resp: { [key: string]: number }) => {
        console.log('API Response:', resp);

        this.studentsByClass = {
          classA: 10,
          classB: 20,
          classC: 30,
        };
        this.chartOptions = {
          ...this.chartOptions,
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

  loadAverageAbsences(): void {
    this.kpiService.getAverageAbsences().subscribe(
      (resp: number) => {
        console.log('API Response:', resp);
        this.averageAbsences = resp;
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching average absences:', error);
      }
    );
  }
}
