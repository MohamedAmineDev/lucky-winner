import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangePasswordForm, User } from '../models/User';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  form: ChangePasswordForm = {} as ChangePasswordForm;
  buttonText: string = "Change password";
  isDisplayed:boolean=false;
  constructor(private userService: AuthService) { }

  ngOnInit(): void {
  }
  emailIsNotValid(email: any) {
    return (
      email.invalid == true
      && (email.dirty == true ||
        email.touched == true));
  }
  passwordIsNotValid(password: any) {
    return (
      password.invalid == true
      && (password.dirty == true ||
        password.touched == true));
  }
  confirmPasswordIsNotValid(confirmPassword: any) {
    return (
      (confirmPassword.invalid == true || this.form.confirmPassword != this.form.password)
      && (confirmPassword.dirty == true
        || confirmPassword.touched == true));
  }

  isNotValid(email: any, password: any, confirmPassword: any) {
    return email.invalid == true || password.invalid == true || confirmPassword.invalid == true;
  }
  changePassword() {
    this.buttonText = "Loading...";
    let user = new User(this.form.email, this.form.password);
    this.userService.changePassword(user).subscribe(data => {
      //console.log(data);
      window.location.href = "/";

    }, (e) => {
      this.isDisplayed=true;
      this.buttonText = "Change password";
    });
  }
  close(){
    this.isDisplayed=false;
  }
}
