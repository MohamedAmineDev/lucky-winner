import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player, User } from '../models/User';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username: string;
  email: string;
  password: string;
  isAuthentified: boolean = false;
  constructor(private http: HttpClient) {
    this.username = "";
    this.password = "";
    this.email = "";
    this.loadData();
    if (this.username != "" && this.password != "" && this.email != "") {
      this.isAuthentified = true;
    }
  }
  registerPlayer(user: Player): boolean {
    /* const h = new HttpHeaders({'header':'test'});
     let path: string = "http://localhost:8090/app/api/manage_player/add_player";
     return this.http.post(path, user, { headers:h });*/
    //const headers = new HttpHeaders().set('access-control-allow-origin', "http://localhost:8090/app/api/manage_player/add_player");
    //let u = new User(this.form.email, this.form.password);
    console.log(user);
    this.http.post("http://localhost:8080/app/api/manage_player/add_player", user).subscribe(data => {
      console.log(data);
      return data;
    });
    return false;
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
  saveData(username: string, email: string, password: string) {
    let random = this.makeid(20);
    let u = email + "|" + username + "|" + password;
    let crypted = random + CryptoJS.AES.encrypt(u, random).toString();
    localStorage.setItem('data', crypted);
    console.log(crypted);
  }
  loadData() {
    let token: string = localStorage.getItem('data') + "";
    console.log(token);
    let random = token.slice(0, 20);
    console.log(random);
    let decrypted: string = CryptoJS.AES.decrypt(token.slice(20, token.length), random).toString(CryptoJS.enc.Utf8);
    console.log(decrypted);
    let sp = decrypted.split('|');
    //console.log(sp[0], sp[1]);
    this.email = sp[0];
    this.username = sp[1];
    this.password = sp[2];
  }
  logout() {
    localStorage.removeItem('data');
  }
}
