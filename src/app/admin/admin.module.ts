import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { RoutingModule } from './routing.module';
import { SharedModule } from '../shared/shared.module';

import {AdminComponent} from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { EditComponent } from './users/edit/edit.component';
import { AddComponent } from './users/add/add.component';


@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
  	AdminComponent,
  	DashboardComponent,
  	UsersComponent,
  	EditComponent,
  	AddComponent,
  ],
  providers: [],
  bootstrap: [AdminComponent]

})
export class AdminModule { }
