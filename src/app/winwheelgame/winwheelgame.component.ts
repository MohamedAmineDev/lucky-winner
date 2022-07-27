import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item, NgxWheelComponent, TextOrientation, TextAlignment } from 'ngx-wheel';
import { Essai } from '../models/Essai';
import { AuthService } from '../services/auth.service';
import { EssaiService } from '../services/essai.service';
import { GiftService } from '../services/gift.service';
import { SelectionService } from '../services/selection.service';
import { Selection } from "../models/Selection";
import { Gift } from '../models/Gift';
//import * as winwheel from '@evshiron/winwheel.js';
declare var Winwheel: any;
@Component({
  selector: 'app-winwheelgame',
  templateUrl: './winwheelgame.component.html',
  styleUrls: ['./winwheelgame.component.css']
})
export class WinwheelgameComponent implements OnInit {
  @ViewChild(NgxWheelComponent, { static: false }) wheel: any;
  items: Item[] = [

  ];
  gameId: number = 0;
  textAlignment: any = "center";
  width: number = window.innerWidth > 0 ? 600 : 400;
  heigth: number = window.innerHeight > 0 ? 600 : 400;
  textOrientation: any = TextOrientation.CURVED;
  idToLandOn: number = 1;
  spinDuration: number = 8;
  spinAmount: number = 10;
  innerRadius: number = 40;
  isPlayable: boolean = true;
  lostId: number = 0;
  gifts: Gift[] = {} as Gift[];
  winningMessage: string = "";
  title: string = "";
  winner: boolean = false;
  displayOnWinning: boolean = false;
  displayError: boolean = false;
  constructor(private essaiService: EssaiService, private userService: AuthService, private activetedRouter: ActivatedRoute, private selectionService: SelectionService, private giftService: GiftService) {
    this.gameId = this.activetedRouter.snapshot.params["id"];
    essaiService.alreadyPlayed(userService.id, userService.email, userService.password, this.gameId).subscribe(data => {
      //console.log(data);
      this.isPlayable = data;
    });
    this.loadData();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    //console.log('only after THIS EVENT "wheel" is usable!!');
    // Call the spin function whenever and wherever you want after the AfterViewInit Event
    //this.wheel.spin();
  }

  reset() {
    // Reset allows you to redraw the wheel
    // Use it after any change to wheel configurations or to allow re-spinning
    /*this.idToLandOn = (Math.random() * this.items.length)
    this.wheel.reset();*/
  }
  displayWheel() {
    this.idToLandOn = this.decidePrize();
    this.resizeScreen();
    //this.wheel.reset();
  }
  after() {
    let essai: any = null;
    if (this.lostId == this.idToLandOn) {
      essai = new Essai("Lost", 0);
      this.title = "Opps"
      this.winningMessage = "You lost better luck next time !!!!";
    }
    else {
      essai = new Essai("Winner", this.idToLandOn);
      let j = 0;
      this.items.forEach(i => {
        if (i.id == this.idToLandOn) {
          this.title = "Congratulations";
          this.winningMessage = `You won ${this.gifts[j].nom}`;
          this.winner = true;
        }
        j++;
      });
    }
    this.displayOnWinning = true;

    this.essaiService.saveResult(this.userService.id, this.userService.email, this.userService.password, essai, this.gameId)
      .subscribe(data => {
        //alert(data);
      });
    //this.idToLandOn = this.decidePrize();
    //this.wheel.reset();
  }
  before() {
    this.wheel.spin();
  }
  decidePrize() {
    const i = Math.floor(Math.random() * this.items.length);
    return this.items[i].id;
  }
  resizeScreen() {
    this.width = 450;
    this.heigth = 450;

  }
  loadData() {
    const colors = ["red", "pink", "purple", "green", "skyblue", "blue", "crimson", "gold", "yellow", "grey"];
    let i = 0;
    let selection: Selection;
    this.selectionService.getSelection(this.gameId, this.userService.email, this.userService.password)
      .subscribe(data => {
        //console.log(data);
        selection = data;
        this.giftService.getGifts(selection.id, this.userService.email, this.userService.password)
          .subscribe(gift => {
            let j = 1;
            this.items = [];
            this.gifts = gift;
            gift.forEach(g => {
              //console.log(g);
              this.items.push({ id: j, text: `prize ${j}`, fillStyle: colors[i] });
              this.displayWheel();
              i++;
              if (colors.length <= i) {
                i = 0;
              }
              j++;
            });
            this.items.push({ id: j, text: `prize ${j}`, fillStyle: colors[i] });
            this.lostId = j;
            this.idToLandOn = this.decidePrize();
          });

      });

  }
  close() {
    this.displayOnWinning = false;
  }
  displayWarning() {
    this.displayError = true;
  }
  closeWarning() {
    this.displayError = false;
  }

}
