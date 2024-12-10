import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  games: Game[] = [
    {
      image: "https://c4.wallpaperflare.com/wallpaper/347/380/22/valorant-jett-valorant-riot-games-hd-wallpaper-preview.jpg",
      title: "Valorant",
      description: "Valorant is an online multiplayer computer game, produced by Riot Games. It is a first-person shooter game, consisting of two teams of five, where one team attacks and the other defends. Players control characters known as 'agents', who all have different abilities to use during gameplay.",
    },
    {
      image: "https://asset-2.tstatic.net/pontianak/foto/bank/images/update-jadwal-m1-piala-dunia-mobile-legends-mlbb-world-championship-2019-besok-selasa-12112019.jpg",
      title: "Mobile Legends",
      description: "Mobile Legends: Bang Bang is a multiplayer online battle arena (MOBA) game designed for mobile phones. The game is free-to-play and is only monetized through in-game purchases like characters and skins. Each player can control a selectable character, called a Hero, with unique abilities and traits.",
    },
    {
      image: "https://wallpapers.com/images/featured/pubg-4k-m7d01u319yw5wo0m.jpg",
      title: "PUBG",
      description: "PUBG is a player versus player shooter game in which up to one hundred players fight in a battle royale, a type of large-scale last man standing deathmatch where players fight to remain the last alive. Players can choose to enter the match solo, duo, or with a small team of up to four people.",
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  
  changeTeam(game: Game) {
    this.router.navigate(['/home/games/teamdetails'],
      { state: { selectedGame: game } });
  }

}
