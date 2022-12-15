import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './components/auth/login-page/login-page.component';
import { LoginComponent } from './components/auth/login/login.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { NavBarComponent } from './components/home/nav-bar/nav-bar.component';
import { RegisterComponent } from './components/customer/register/register.component';
import { FriendsListComponent } from './components/customer/friends-list/friends-list.component';
import { CustomerCardComponent } from './components/customer/customer-card/customer-card.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'
import { HttpClientModule } from '@angular/common/http'
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginComponent,
    LogoutComponent,
    HomePageComponent,
    NavBarComponent,
    RegisterComponent,
    FriendsListComponent,
    CustomerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
