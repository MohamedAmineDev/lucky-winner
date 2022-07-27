import { Component, OnInit } from '@angular/core';
import { Game, IGame } from '../models/Game';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Array<Game> = [];
  noGames: boolean = false;
  constructor(private gameService: GameService) {
    gameService.getAll().subscribe(g => {
      this.games = g;
    }, (e) => {
      this.noGames = true;
    });
  }

  ngOnInit(): void {
  }
}
