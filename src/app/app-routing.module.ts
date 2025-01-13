import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { VerificationComponent } from './verification/verification.component';

const routes: Routes = [
 {path:'', component:LoginComponent},
 {path:'login', component:LoginComponent},
 {path:'register', component:RegistrationComponent},
 {path:'home', component:HomeComponent},
 {path:'verification', component: VerificationComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
