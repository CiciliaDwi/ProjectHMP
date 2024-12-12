import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleserviceService } from 'src/app/scheduleservice.service';

interface Game {
  image: string;
  title: string;
  description: string;
}


@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {

  image = ""
  title = ""
  desc = ""
  games: Game[] = [];

  constructor(private router: Router, private scheduleService: ScheduleserviceService) { }

  ngOnInit() {
    
  }

  
  
  changeTeam(game: Game) {
    this.router.navigate(['/home/games/teamdetails'],
      { state: { selectedGame: game } });
  }

}
