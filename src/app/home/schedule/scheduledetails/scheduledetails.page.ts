import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ScheduleserviceService } from 'src/app/scheduleservice.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-scheduledetails',
  templateUrl: './scheduledetails.page.html',
  styleUrls: ['./scheduledetails.page.scss'],
})
export class ScheduledetailsPage implements OnInit {

  schedules: any[] = []
  scheduleDetails: any;

  index = 0

  isNotified: boolean = false;

  constructor(private alertController: AlertController, private scheduleservice: ScheduleserviceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.schedules = this.scheduleservice.schedules
    this.route.params.subscribe(params => {
      this.index = params['index']; // value of 'index' should match the route parameter name  app.route
      this.scheduleDetails = this.schedules[this.index];// You can use the 'index' parameter for your logic here
    });
  }

  async notifyMe() {
    const alert = await this.alertController.create({
      message: this.isNotified ? 'Notification canceled.' : 'Notifikasi Sudah Dibuat.',
      buttons: ['OK', 'CANCEL']
    });
    await alert.present();
    this.isNotified = !this.isNotified;
  }

}
