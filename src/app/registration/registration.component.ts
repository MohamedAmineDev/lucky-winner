import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Player, RegisterUser, SignInUser, User } from '../models/User';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form: RegisterUser = {} as RegisterUser;
  cch: any = "";
  username: string;
  pas: string;

  alertIsDisplayed: boolean = false;
  buttonText: string = "Register";
  registred: boolean = false;
  constructor(private userService: AuthService, private router: Router) {
    this.username = userService.username;
    this.pas = userService.password;
  }

  ngOnInit(): void {
  }
  addUser() {
    this.buttonText = "Loading...";
    const username = this.form.username;
    const password = this.form.password;
    const email = this.form.email;
    const address = this.form.address;
    let p: Player = new Player(0, username, password, email, address);
    this.userService.registerPlayer(p).subscribe((data) => {
      if (data) {
        this.alertIsDisplayed = true;
        this.registred = true;
      }
    }, (e) => {
      this.registred = false;
      this.alertIsDisplayed = true;
      this.buttonText = "Register";
    });
    //this.router.navigate(["/"]);
    //this.userService.saveData(this.form.email, this.form.password);
    //this.userService.loadData();
  }
  isNotValide(username: any, email: any, address: any, password: any, confirmPassword: any): boolean {
    //console.log(name,price);
    return username.invalid == true || email.invalid == true || address.invalid == true || password.invalid == true || confirmPassword.invalid == true;
  }
  usernameIsNotValide(username: any): boolean {
    return (
      username.invalid == true
      && (username.dirty == true ||
        username.touched == true));
  }
  emailIsNotValid(name: any): boolean {
    return (
      name.invalid == true
      && (name.dirty == true ||
        name.touched == true));
  }
  addressIsNotValide(address: any): boolean {
    return (
      address.invalid == true
      && (address.dirty == true ||
        address.touched == true));
  }
  passwordIsNotValid(password: any): boolean {
    return (
      password.invalid == true
      && (password.dirty == true
        || password.touched == true));
  }
  confirmPasswordIsNotValid(confimrPassword: any) {
    return (
      (confimrPassword.invalid == true || this.form.confirmPassword != this.form.password)
      && (confimrPassword.dirty == true
        || confimrPassword.touched == true));
  }
  closeAlert() {
    this.alertIsDisplayed = false;
    if (this.registred) {
      this.router.navigate(["/login"]);
    }
  }
}
