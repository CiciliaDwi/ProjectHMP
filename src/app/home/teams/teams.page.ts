import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  likes: number = 0;

  constructor() { }

  ngOnInit() {
  }

  increaseLikes() {
    this.likes += 1;
  }

}
