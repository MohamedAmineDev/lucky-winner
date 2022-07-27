import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Gift } from '../models/Gift';
@Injectable({
  providedIn: 'root'
})
export class GiftService {

  constructor(private http: HttpClient) { }
  getGifts(selectionId: number, email: string, password: string) {
    const url = `http://localhost:8080/app/api/manage_gift/user/selection/gifts/${selectionId}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(email + ':' + password)
      })
    };
    return this.http.get<Gift[]>(url, httpOptions);
  }
}
