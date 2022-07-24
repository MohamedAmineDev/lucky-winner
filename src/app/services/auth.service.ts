import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username: string;
  password: string;
  constructor() {
    this.username = "";
    this.password = "";
  }
}
