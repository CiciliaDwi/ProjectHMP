import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ScheduleserviceService } from 'src/app/scheduleservice.service';
import { HttpClient } from '@angular/common/http';

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
  link = "https://ubaya.xyz/hybrid/160422148/projecthmp/"

  constructor(private route: ActivatedRoute, private router: Router, private scheduleService: ScheduleserviceService, private http: HttpClient) { }

  ngOnInit() {
    this.LoadData();
  }

  LoadData() {
    this.http.get(this.link + "games.php").subscribe((data: any) => {
      this.games = data;
    });
  }
  changeTeam(game: Game) {
    this.router.navigate(['/home/games/teamdetails'],
      { state: { selectedGame: game } });
  }

}
