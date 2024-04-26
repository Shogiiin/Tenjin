import { Component } from '@angular/core';
import { GameItem } from './gameItem';
import { GamelookupService } from './games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  games :GameItem[] = [
    // {appid: 1, name: "oioi"},
    // {appid: 1, name: "oioi"},
    // {appid: 1, name: "oioi"},
  ];

  constructor(private gameService :GamelookupService) {  }
  ngOnInit(): void {
    this.gameService.getGames().subscribe((data :any) => {
      this.games = data.applist.apps;
    });
  }
  printGames() {
    console.log(this.games)
  }
}
