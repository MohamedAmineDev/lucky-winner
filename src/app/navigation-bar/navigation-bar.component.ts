import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  isdisPlayed: boolean = false;
  loggedIn: boolean = false;
  username: string = "";
  constructor(private userService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loggedIn = this.userService.isAuthentified;
    this.username = this.userService.username;
    console.log(this.loggedIn);
  }
  displayOptions() {
    if (this.isdisPlayed) {
      this.hideOptions();
    }
    else {
      this.isdisPlayed = true;
    }
  }
  hideOptions() {
    this.isdisPlayed = false;
  }
  logout() {
    this.userService.logout();
    window.location.href = "/login";
  }

}
