import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BikeOfTheDayComponent } from './landing-page/src/app/landing-page/bike-of-the-day/bike-of-the-day.component';
import { UserLoginComponent } from './landing-page/src/app/landing-page/user-login/user-login.component';
import { UserRegisterComponent } from './landing-page/src/app/landing-page/user-register/user-register.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    BikeOfTheDayComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
