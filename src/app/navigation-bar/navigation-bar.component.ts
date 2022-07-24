import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  isdisPlayed: boolean = false;
  constructor() { }

  ngOnInit(): void {
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

}
