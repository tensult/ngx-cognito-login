import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';
import { AppRoutesModule } from './app-routes.module';
import {
  AuthService,
  FirstTimePasswordComponent,
  ForgotPasswordComponent,
  ResetPasswordComponent,
  SigninComponent,
  SignoutComponent
} from './auth';
import {
  HomeComponent
} from './home';
import { LoadingComponent } from './loading/component';
import {HeaderComponent} from './header/component';
import {FooterComponent} from './footer/component';

@NgModule({
  declarations: [
    AppComponent,
    FirstTimePasswordComponent,
    ForgotPasswordComponent,
    HomeComponent,
    LoadingComponent,
    ResetPasswordComponent,
    SigninComponent,
    SignoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    AppRoutesModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
    AuthService,
    Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
