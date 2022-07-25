import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player, User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username: string;
  password: string;
  constructor(private http: HttpClient) {
    this.username = "";
    this.password = "";
  }
  registerPlayer(user: Player) {
    /* const h = new HttpHeaders({'header':'test'});
     let path: string = "http://localhost:8090/app/api/manage_player/add_player";
     return this.http.post(path, user, { headers:h });*/
    //const headers = new HttpHeaders().set('access-control-allow-origin', "http://localhost:8090/app/api/manage_player/add_player");
    //let u = new User(this.form.email, this.form.password);
    console.log(user);
    this.http.post("http://localhost:8080/app/api/manage_player/add_player", user).subscribe(data => {
      console.log(data);
    });
  }
  login(user: User) {
    const headers = new HttpHeaders({ 'header': 'Access-Control-Allow-Origin' });
    return this.http.post("http://localhost:8090/app/api/manage_user/check_user", user, { headers: headers });
  }
}
