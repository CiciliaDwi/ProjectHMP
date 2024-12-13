import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleserviceService {

link = "https://ubaya.xyz/hybrid/160422148/";

  constructor(private http: HttpClient) { }

  login(p_username: string, p_password: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();

    body.set('username', p_username);
    body.set('password', p_password);
    const urlEncodedData = body.toString();
    return this.http.post(
      this.link + "login_project.php", urlEncodedData, { headers });
  }

  ReadGame(): Observable<any> {
    return this.http.get(this.link + "games.php");
  }

  //hapus schedules, pindah ke database 
  schedules = [
    {
      img: 'https://static.invenglobal.com/upload/image/2021/10/13/r1634161987104320.jpeg',
      tgl: '05',
      bulan: 'SEP',
      event: 'Regional Qualifier - Valorant',
      tim: 'Valorant - Team A',
      place: 'Los Angeles, CA (10.00 AM)',
      description: 'This high-stakes event will bring together top teams from across theregion, all competing for a chance to advance to the national finals. Expect intense gameplay, strategic plays, and thrilling moments as teams battle it out in one of the most popular first-person shooters.'
    },
    {
      img: 'https://steamuserimages-a.akamaihd.net/ugc/1751308203935637934/819BEFC5970A65A3386A7B224BCED8C3F4C742F0/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
      tgl: '10',
      bulan: 'SEP',
      event: 'League Of Legends Workshop',
      tim: 'LOL - Team C',
      place: 'NYC, CA (08.00 AM)',
      description: 'This high-stakes event will bring together top teams from across theregion, all competing for a chance to advance to the national finals. Expect intense gameplay, strategic plays, and thrilling moments as teams battle it out in one of the most popular first-person shooters.'
    },
    {
      img: 'https://ncompassonline.com/wp-content/uploads/2014/08/2-COD-15-9921.jpg',
      tgl: '07',
      bulan: 'OCT',
      event: 'Call Of Duty Championship',
      tim: 'COD - Team A',
      place: 'NYC, CA (08.00 AM)',
      description: 'This high-stakes event will bring together top teams from across theregion, all competing for a chance to advance to the national finals. Expect intense gameplay, strategic plays, and thrilling moments as teams battle it out in one of the most popular first-person shooters.'
    },
    {
      img: 'https://i.ytimg.com/vi/aC_ZVx6SIQg/maxresdefault.jpg',
      tgl: '11',
      bulan: 'NOV',
      event: 'Dota 2 Livestream',
      tim: 'Dota 2 - Team B',
      place: 'Florida, CA (01.00 PM)',
      description: 'This high-stakes event will bring together top teams from across theregion, all competing for a chance to advance to the national finals. Expect intense gameplay, strategic plays, and thrilling moments as teams battle it out in one of the most popular first-person shooters.'
    },
    {
      img: 'https://staticg.sportskeeda.com/editor/2022/04/b0e9a-16512400951312-1920.jpg',
      tgl: '04',
      bulan: 'DEC',
      event: 'Fortnite Invitational',
      tim: 'Fortnite - Team A',
      place: 'Minnesota, CA (03.00 PM)',
      description: 'This high-stakes event will bring together top teams from across theregion, all competing for a chance to advance to the national finals. Expect intense gameplay, strategic plays, and thrilling moments as teams battle it out in one of the most popular first-person shooters.'
    }
  ];

}
