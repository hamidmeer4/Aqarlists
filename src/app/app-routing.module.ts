import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { VerificationComponent } from './verification/verification.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { ContactComponent } from './contact/contact.component';
import { AgentComponent } from './agent/agent.component';
import { CompaniesComponent } from './companies/companies.component';
import { ListedPropertiesComponent } from './listed-properties/listed-properties.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { ComparePropertiesComponent } from './compare-properties/compare-properties.component';
import { ComparePropertiesDetailComponent } from './compare-properties-detail/compare-properties-detail.component';
import { ThirdPartyDetailComponent } from './third-party-detail/third-party-detail.component';
import { InteriorApartmentComponent } from './interior-apartment/interior-apartment.component';
import { authGuard } from './Gaurd/auth.guard';

const routes: Routes = [
 {path:'', component:HomeComponent},
 {path:'login', component:LoginComponent},
 {path:'register', component:RegistrationComponent},
 {path:'home', component:HomeComponent},
 {path:'verification', component: VerificationComponent},
 {path:'for-sale', component: ForSaleComponent},
 {path:'contact',component:ContactComponent},
 {path:'agent',component: AgentComponent},
 {path:'companies',component:CompaniesComponent},
 {path:'listed-properties', component: ListedPropertiesComponent},
 {path:'fAQ', component:FaqComponent},
 {path:'about', component:AboutComponent},
 {path:'compare-properties', component:ComparePropertiesComponent},
 { path: 'compare-properties-detail/:id', component: ComparePropertiesDetailComponent },
 {path:'third-party-detail', component:ThirdPartyDetailComponent},
 { path: 'admin', 
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  canActivate: [authGuard] },
 {path:'interior-apartment/:id', component:InteriorApartmentComponent},
 { path: '**', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
  }),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
