import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../models/Game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() game: Game = {} as Game;
  display: boolean = false;
  title = "Play the game";
  message = "Do you really want to play the game ?";
  icon = '';
  constructor() { }

  ngOnInit(): void {
  }
  displayModal() {
    if (this.display) {
      this.display = false;
    }
    else {
      this.display = true;
    }
  }

}
