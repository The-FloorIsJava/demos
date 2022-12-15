import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/auth/login-page/login-page.component';
import { FriendsListComponent } from './components/customer/friends-list/friends-list.component';
import { RegisterComponent } from './components/customer/register/register.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';

const routes: Routes = [
  {path: "home", component: HomePageComponent},
  {path: "", component: HomePageComponent},
  {path: "login", component: LoginPageComponent},
  {path: "register", component: RegisterComponent},
  {path: "friends", component: FriendsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
