import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Selection } from '../models/Selection';
@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  constructor(private http: HttpClient) { }
  getSelection(gameId: number, email: string, password: string) {
    const url = `http://localhost:8080/app/api/manage_selection/selection/game/${gameId}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(email + ':' + password)
      })
    };
    return this.http.get<Selection>(url, httpOptions);
  }
}
