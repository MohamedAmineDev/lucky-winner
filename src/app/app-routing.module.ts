import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { GameSelectionComponent } from './game-selection/game-selection.component';
import { GamesComponent } from './games/games.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/not-auth.guard';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'games', component: GamesComponent },
  { path: 'login', component: LoginComponent, canActivate: [NotAuthGuard] },
  { path: 'registration', component: RegistrationComponent, canActivate: [NotAuthGuard] },
  { path: 'game/:id', component: GameSelectionComponent },
  { path: 'change_password', component: ChangePasswordComponent, canActivate: [NotAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
