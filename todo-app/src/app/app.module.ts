import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosHomeComponent } from './components/todos-home/todos-home.component';
import { TodosPendingComponent } from './components/todos-pending/todos-pending.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { CompletePipe } from './pipes/complete.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodosHomeComponent,
    TodosPendingComponent,
    NavBarComponent,
    TodoCardComponent,
    CompletePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
