import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { PropertyComponent } from './property/property.component';
import { ReviewComponent } from './review/review.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent }, 
      { path: 'messages', component: MessagesComponent },
      { path: 'property', component: PropertyComponent }, 
      { path: 'review', component: ReviewComponent }, 
      { path: 'add-property',component:AddPropertyComponent},
      { path: 'profile', component: ProfileComponent }, 
      { path: 'user', component: UserComponent }, 
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
