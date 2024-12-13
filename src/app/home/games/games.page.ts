import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private router: Router, private scheduleService: ScheduleserviceService) { }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.title = params['index'] //mengambil index di link address + karena di approuting pakai index
    //   this.scheduleService.ReadGame(this.image, this.title, this.desc).subscribe(
    //     (data) => {
    //       this.image = data.image;
    //       this.title = data.title;
    //       this.desc = data.desc;
    //     }
    //   );
    // });
  }

  
  
  changeTeam(game: Game) {
    this.router.navigate(['/home/games/teamdetails'],
      { state: { selectedGame: game } });
  }

}
