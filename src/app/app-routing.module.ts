import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestComponent }   from './test/test.component';
import { ExamComponent }   from './test/exam/exam.component';
import { AdminComponent }   from './admin/admin.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: TestComponent },
  { path: 'exam', component: ExamComponent },
  { path: 'rrhh-admin', loadChildren: './admin/admin.module#AdminModule' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
