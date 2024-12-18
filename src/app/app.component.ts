import { Component } from '@angular/core';
import { ScheduleserviceService } from './scheduleservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  username = ""
  password = ""
  fname = ""
  lname = ""

  constructor(private scheduleService: ScheduleserviceService, private router: Router) {
    this.fname = localStorage.getItem("app_fname") ?? ''
    this.username = localStorage.getItem("app_username") ?? ''
    this.lname = localStorage.getItem("app_lname") ?? ''
    this.fname = this.scheduleService.fname;
    if(this.fname != '') {
      this.router.navigate(['/home/games']);
    }
  }

  login() {
    this.scheduleService.login(this.username, this.password).subscribe(
      (response: any) => {
        if (response.result === 'success') {
          alert("success");
          this.fname = response.fname;
          this.username = response.username;
          this.lname = response.lname;
          localStorage.setItem("app_fname", this.fname)
          localStorage.setItem("app_username", this.username)
          localStorage.setItem("app_lname", this.lname)
        }
        else {
          alert(response.message)
        }
      });
  }

  logout() {
    this.username = ""
    this.fname = ""
    this.lname = ""
    this.password = ""
    
    localStorage.removeItem("app_username")
    localStorage.removeItem("app_fname")
    localStorage.removeItem("app_lname")
    localStorage.removeItem("app_password")
  }
}
