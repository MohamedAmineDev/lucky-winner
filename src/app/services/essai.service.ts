import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Essai } from '../models/Essai';
@Injectable({
  providedIn: 'root'
})
export class EssaiService {

  constructor(private http: HttpClient) { }
  alreadyPlayed(playerId: number, email: string, password: string, gameId: number) {
    const url = `http://localhost:8080/app/api/manage_playing/player/already_played/${playerId}/${gameId}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(email + ':' + password)
      })
    };
    return this.http.get<boolean>(url, httpOptions);
  }
  saveResult(playerId: number, email: string, password: string, essai: Essai, gameId: number) {
    const url = `http://localhost:8080/app/api/manage_playing/player/played_the_game/${playerId}/${gameId}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(email + ':' + password)
      })
    };
    return this.http.post<boolean>(url, essai, httpOptions);
  }
}
