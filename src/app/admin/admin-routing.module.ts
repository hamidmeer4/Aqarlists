import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropertyComponent } from './property/property.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent }, 
      { path: 'property', component: PropertyComponent }, 
      { path: 'review', component: ReviewComponent }, 
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
