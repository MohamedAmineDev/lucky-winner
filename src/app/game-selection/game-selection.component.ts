import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SelectionService } from '../services/selection.service';

@Component({
  selector: 'app-game-selection',
  templateUrl: './game-selection.component.html',
  styleUrls: ['./game-selection.component.css']
})
export class GameSelectionComponent implements OnInit {
  id: number = {} as number;
  selection: any;
  constructor(private activetedRouter: ActivatedRoute, private selectionService: SelectionService, private userService: AuthService, private router: Router) {
    if (userService.isAuthentified == false) {
      router.navigate(['/login']);
    }
    this.id = this.activetedRouter.snapshot.params["id"];
    this.selectionService.getSelection(this.id, this.userService.email, this.userService.password).subscribe(data => {
      //console.log(data);
      this.selection = data;
      //console.log(this.selection);
    });
  }

  ngOnInit(): void {
    //console.log(this.selection);

  }


}
