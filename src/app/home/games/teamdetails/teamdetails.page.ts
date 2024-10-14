import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teamdetails',
  templateUrl: './teamdetails.page.html',
  styleUrls: ['./teamdetails.page.scss'],
})
export class TeamdetailsPage implements OnInit {

  selectedGame: any;  // Untuk menyimpan game yang dipilih
  selectedGameImage: string = ''; // Untuk menyimpan gambar game yang dipilih

  tims = [
    { tim: "Team A" },
    { tim: "Team B" },
    { tim: "Team C" },
    { tim: "Team D" },
    { tim: "Team E" },
  ];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.selectedGame = navigation.extras.state['selectedGame'];
      this.selectedGameImage = this.selectedGame.image;  
    }
  }

  ngOnInit() {
  }


  navigateToTeamMember() {
    this.router.navigate(['/home/games/teamdetails/teammember'], { 
      state: { 
        selectedGame: this.selectedGame 
      } 
    });
  }
}