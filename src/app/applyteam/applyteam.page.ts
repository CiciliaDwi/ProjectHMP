import { Component, OnInit } from '@angular/core';
import { ScheduleserviceService } from '../scheduleservice.service';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apply-team',
  templateUrl: './applyteam.page.html',
  styleUrls: ['./applyteam.page.scss'],
})
export class ApplyTeamPage implements OnInit {
  proposals: any[] = []; // Data daftar proposal
  idmember: number; 

  link = "https://ubaya.xyz/hybrid/160422148/projecthmp/"

  constructor(
    private scheduleService: ScheduleserviceService,
    private modalController: ModalController,
    private route: ActivatedRoute, private navController: NavController, private router: Router, 
    private http: HttpClient)
   {
    this.idmember = this.route.snapshot.params['userId'];
   }

   ngOnInit() {
    this.loadProposals();
  }
  

  loadProposals() {
    console.log('Loading proposals for member ID:', this.idmember);

    // Pastikan idmember ada sebelum mengirimkan request
    if (this.idmember) {
      this.scheduleService.ReadProposals(this.idmember).subscribe({
        next: (data) => {
          console.log('Data proposals received:', data);
          this.proposals = Array.isArray(data) ? data : [data];  // Menyimpan data ke array proposals
        },
        error: (error) => {
          console.error('Error loading proposals:', error);
        }
      });
    } else {
      console.error('idmember is missing');
    }
  }
  
  // LoadProposal() {
  //   this.http.get(this.link + "proposal.php").subscribe((data: any) => {
  //     this.proposals = data;
  //   });
  // }
  

  async openApplyForm() {
    this.navController.navigateForward('/newapplyteam');
  }

  getStatusColor(status: string): string {
    switch(status.toLowerCase()) {
      case 'approved': return 'success';
      case 'pending': return 'warning';
      case 'rejected': return 'danger';
      default: return 'medium';
    }
  }
}