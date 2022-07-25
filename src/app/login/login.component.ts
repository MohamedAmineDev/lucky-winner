import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, SignInUser } from '../models/User';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: SignInUser = {} as SignInUser;
  cch: any = "";
  username: string;
  pas: string;
  constructor(private userService: AuthService, private router: Router) {
    this.username = userService.username;
    this.pas = userService.password;
  }

  ngOnInit(): void {
  }
  addUser() {
    console.log(this.form.email + "|" + this.form.password);
    let user = new User(this.form.email, this.form.password);
    console.log(user);
    this.userService.login(user).subscribe(data=>{
      console.log(data);
    });
    //this.router.navigate(['/']);
    //this.userService.saveData(this.form.email, this.form.password);
    //this.userService.loadData();
  }
  isNotValide(email: any, password: any): boolean {
    //console.log(name,price);
    return email.invalid == true || password.invalid == true;
  }
  emailIsNotValid(name: any): boolean {
    return (
      name.invalid == true
      && (name.dirty == true ||
        name.touched == true));
  }
  passwordIsNotValid(password: any): boolean {
    return (
      password.invalid == true
      && (password.dirty == true
        || password.touched == true));
  }
}
