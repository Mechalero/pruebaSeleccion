import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AdminComponent} from './admin.component';
import {UsersComponent} from './users/users.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EditComponent} from './users/edit/edit.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: '', redirectTo: (localStorage.getItem('token'))?'dashboard':'login' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: 'user/:id', component: EditComponent },
      { path: 'login', component: LoginComponent }
    ]
  }
];

@NgModule({
  imports:
    [
      RouterModule.forChild(routes),
    ],
  exports: [RouterModule]
})
export class RoutingModule { }
