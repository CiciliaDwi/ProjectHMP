import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teammember',
  templateUrl: './teammember.page.html',
  styleUrls: ['./teammember.page.scss'],
})
export class TeammemberPage implements OnInit {

  selectedGameImage: string = '';  // Gambar game yang dipilih

  timMember = [
    {
      image: "https://my.ubaya.ac.id/img/mhs/160422126_m.jpg",
      name: "Trianda",
      role: "Duelist"
    },
    {
      image: "https://my.ubaya.ac.id/img/mhs/160422150_m.jpg",
      name: "Cecil",
      role: "Controller"
    },
    {
      image: "https://my.ubaya.ac.id/img/mhs/160323001_m.jpg",
      name: "Cicil",
      role: "Sentinel"
    }
  ];

  constructor(private router: Router) { 
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.selectedGameImage = navigation.extras.state['selectedGame'].image; // Ambil gambar game dari state
    }
  }

  ngOnInit() {
  }

}
