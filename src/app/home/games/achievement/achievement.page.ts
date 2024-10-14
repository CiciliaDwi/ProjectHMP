// achievement.page.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AchievementserviceService } from 'src/app/achievementservice.service';
import { Achievement } from './achievement.module';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.page.html',
  styleUrls: ['./achievement.page.scss'],
})
export class AchievementPage implements OnInit {
  achievements: any[] = [];
  selectedGameTitle: string = '';
  filteredAchievements: Achievement[] = [];
  selectedYear: number | 'all' = 'all';
  years: number[] = [2024, 2023, 2022];

  constructor(
    private route: ActivatedRoute,
    private achievementservice: AchievementserviceService
  ) { }
  ngOnInit() {
    this.selectedGameTitle = this.route.snapshot.paramMap.get('gameTitle') || '';
    console.log('Selected Game Title:', this.selectedGameTitle); 

    this.filterAchievements(); // Memfilter awal

    this.years = Array.from(new Set(this.achievementservice.achievements.map(a => a.year))); 
    console.log('Available Years:', this.years); 
  }
  filterAchievements() {

    this.filteredAchievements = this.achievementservice.achievements.filter(achievement => {
      const matchesGame = achievement.game === this.selectedGameTitle; 
      const matchesYear = this.selectedYear === 'all' || achievement.year === this.selectedYear; 
      return matchesGame && matchesYear; 
    });
    console.log('Filtered Achievements:', this.filteredAchievements); 
  }
}