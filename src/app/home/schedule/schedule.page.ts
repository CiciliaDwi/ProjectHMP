import { Component, OnInit } from '@angular/core';
import { ScheduleserviceService } from 'src/app/scheduleservice.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  schedules: any[] = []
  
  constructor(private scheduleservice: ScheduleserviceService, private router :Router) {}

  ngOnInit() {
    this.schedules = this.scheduleservice.schedules
  }

  goToDetail(index: number) {
    this.router.navigate(['/scheduledetails', index]);  
  }
}
