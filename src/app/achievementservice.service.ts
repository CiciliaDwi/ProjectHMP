import { Injectable } from '@angular/core';
import { Achievement } from './home/games/achievement/achievement.module';

@Injectable({
  providedIn: 'root'
})
export class AchievementserviceService {

  achievements: Achievement[] = [
    {
      url : "https://wallpapers.com/images/featured/pubg-4k-m7d01u319yw5wo0m.jpg",
      description: 'Winner of the PUBG Regional Championship', 
      year: 2022, 
      team: 'Team Alpha', 
      game: 'PUBG' 
    },
    {
      url : "https://wallpapers.com/images/featured/pubg-4k-m7d01u319yw5wo0m.jpg",
      description: 'Winner of the PUBG Global Championship', 
      year: 2023, 
      team: 'Team Alpha', 
      game: 'PUBG' 
    },
    { 
      url : "https://wallpapers.com/images/featured/pubg-4k-m7d01u319yw5wo0m.jpg",
      description: 'Best Sniper in PUBG Season 4', 
      year: 2024, 
      team: 'Team Bravo', 
      game: 'PUBG' 
    },
    { 
      url : "https://c4.wallpaperflare.com/wallpaper/347/380/22/valorant-jett-valorant-riot-games-hd-wallpaper-preview.jpg",
      description: 'Winner of the Regional Valorant', 
      year: 2022, 
      team: 'Team A', 
      game: 'Valorant' 
    },
    { 
      url : "https://c4.wallpaperflare.com/wallpaper/347/380/22/valorant-jett-valorant-riot-games-hd-wallpaper-preview.jpg",
      description: 'Champions of the Regional Valorant Showdown', 
      year: 2023, 
      team: 'Team A', 
      game: 'Valorant' 
    },
    { 
      url : "https://c4.wallpaperflare.com/wallpaper/347/380/22/valorant-jett-valorant-riot-games-hd-wallpaper-preview.jpg",
      description: 'Best Defensive Team Award', 
      year: 2024, 
      team: 'Team A', 
      game: 'Valorant' 
    },
    {
      url : "https://asset-2.tstatic.net/pontianak/foto/bank/images/update-jadwal-m1-piala-dunia-mobile-legends-mlbb-world-championship-2019-besok-selasa-12112019.jpg", 
      description: 'Winner of MLBB Regional Champions', 
      year: 2022, 
      team: 'Team X', 
      game: 'Mobile Legends' 
    },
    {
      url : "https://asset-2.tstatic.net/pontianak/foto/bank/images/update-jadwal-m1-piala-dunia-mobile-legends-mlbb-world-championship-2019-besok-selasa-12112019.jpg", 
      description: 'MLBB World Champions', 
      year: 2023, 
      team: 'Team X', 
      game: 'Mobile Legends' 
    },
    { 
      url : "https://asset-2.tstatic.net/pontianak/foto/bank/images/update-jadwal-m1-piala-dunia-mobile-legends-mlbb-world-championship-2019-besok-selasa-12112019.jpg", 
      description: 'MVP of the MLBB Season', 
      year: 2024, 
      team: 'Team Y', 
      game: 'Mobile Legends' 
    }
  ];

  constructor() { }
}
