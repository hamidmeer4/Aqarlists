import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { VerificationComponent } from './verification/verification.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import {MatSliderModule} from '@angular/material/slider';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { BubblePaginationDirective } from './bubble-pagination-directive.directive';
import { PaginatorComponent } from './paginator/paginator.component';
import { ContactComponent } from './contact/contact.component';
import { AgentComponent } from './agent/agent.component';
import { CompaniesComponent } from './companies/companies.component';
import { ListedPropertiesComponent } from './listed-properties/listed-properties.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { InteriorApartmentComponent } from './interior-apartment/interior-apartment.component';
import { ComparePropertiesComponent } from './compare-properties/compare-properties.component';
import { ComparePropertiesDetailComponent } from './compare-properties-detail/compare-properties-detail.component';
import {MatTableModule} from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ThirdPartyDetailComponent } from './third-party-detail/third-party-detail.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoaderComponent } from './loader/loader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    VerificationComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ForSaleComponent,
    SideBarComponent,
    BubblePaginationDirective,
    PaginatorComponent,
    ContactComponent,
    AgentComponent,
    CompaniesComponent,
    ListedPropertiesComponent,
    FaqComponent,
    AboutComponent,
    InteriorApartmentComponent,
    ComparePropertiesComponent,
    ComparePropertiesDetailComponent,
    ThirdPartyDetailComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,  
    MatSliderModule,
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
