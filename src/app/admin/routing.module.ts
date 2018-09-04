import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AdminComponent} from './admin.component';
import {UsersComponent} from './users/users.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EditComponent} from './users/edit/edit.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: 'user/:id', component: EditComponent }
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
