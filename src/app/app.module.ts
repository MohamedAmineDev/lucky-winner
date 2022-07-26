import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './game/game.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { WinwheelgameComponent } from './winwheelgame/winwheelgame.component';
import { GameSelectionComponent } from './game-selection/game-selection.component';
import { NgxWheelModule } from 'ngx-wheel';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    GamesComponent,
    GameComponent,
    LoginComponent,
    RegistrationComponent,
    WinwheelgameComponent,
    GameSelectionComponent,
    ChangePasswordComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxWheelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
