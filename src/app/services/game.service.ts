import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game, IGame } from '../models/Game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  games: any;
  constructor(private http: HttpClient) {
    //this.getAllGames();
  }
  fetchGames(): Observable<IGame[]> {
    return this.http.get<IGame[]>("http://localhost:8090/app/api/manage_game/games");
    //console.log(this.games);
  }
  getAllGames() {
    this.fetchGames().subscribe(e => {
      //console.log(e);
      this.games = e;
      //console.log(this.games);
      //console.log("response recived");
    }, (e) => {
      //console.log("error");
    });
    return this.games;
  }
  getAll(): Observable<Array<Game>> {
    return this.http.get<Array<Game>>("http://localhost:8080/app/api/manage_game/games");
  }
}
