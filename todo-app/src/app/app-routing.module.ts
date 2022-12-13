import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosHomeComponent } from './components/todos-home/todos-home.component';
import { TodosPendingComponent } from './components/todos-pending/todos-pending.component';

const routes: Routes = [
  {path:"home", component: TodosHomeComponent},
  {path:"pending", component: TodosPendingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
