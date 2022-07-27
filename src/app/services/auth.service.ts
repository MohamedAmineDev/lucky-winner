import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player, User } from '../models/User';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  id: number = 0;
  username: string;
  email: string;
  password: string;
  isAuthentified: boolean = false;
  constructor(private http: HttpClient) {
    this.username = "";
    this.password = "";
    this.email = "";
    this.loadData();
    if (this.username != "" && this.password != "" && this.email != "" && this.id > 0) {
      this.isAuthentified = true;
    }
  }
  registerPlayer(user: Player) {
    /* console.log(user);
     this.http.post("http://localhost:8080/app/api/manage_player/add_player", user).subscribe(data => {
       console.log(data);
       return data;
     });
     return false;*/
    return this.http.post<boolean>("http://localhost:8080/app/api/manage_player/add_player", user);
  }
  fetchUsername(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(user.email + ':' + user.password)
      })
    };
    return this.http.get<Player>("http://localhost:8080/app/api/manage_user/user/username/" + user.email, httpOptions);
  }
  login(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(user.email + ':' + user.password)
      })
    };
    return this.http.post("http://localhost:8080/app/api/manage_user/user/check_user", user, httpOptions);
  }
  makeid(length: number) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }
  saveData(id: number, username: string, email: string, password: string) {
    let random = this.makeid(20);
    let u = id + "|" + email + "|" + username + "|" + password;
    let crypted = random + CryptoJS.AES.encrypt(u, random).toString();
    localStorage.setItem('data', crypted);
    //console.log(crypted);
  }
  loadData() {
    let token: string = localStorage.getItem('data') + "";
    //console.log(token);
    let random = token.slice(0, 20);
    //console.log(random);
    let decrypted: string = CryptoJS.AES.decrypt(token.slice(20, token.length), random).toString(CryptoJS.enc.Utf8);
    //console.log(decrypted);
    let sp = decrypted.split('|');
    //console.log(sp[0], sp[1]);
    this.id = parseInt(sp[0]);
    this.email = sp[1];
    this.username = sp[2];
    this.password = sp[3];
  }
  logout() {
    localStorage.removeItem('data');
  }
  changePassword(user: User) {
    const url = `http://localhost:8080/app/api/manage_user/update_user/change_password/${user.email}`;
    return this.http.put(url, user);
  }
}
