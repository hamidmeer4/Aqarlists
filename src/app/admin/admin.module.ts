import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminSideBarComponent } from './admin-side-bar/admin-side-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { VerticaleChartComponent } from './dashboard/verticale-chart/verticale-chart.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MessagesComponent } from './messages/messages.component';
import { FormsModule } from '@angular/forms';
import { PropertyComponent } from './property/property.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ReviewComponent } from './review/review.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminSideBarComponent,
    DashboardComponent,
    VerticaleChartComponent,
    MessagesComponent,
    PropertyComponent,
    ReviewComponent,
    AddPropertyComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxChartsModule,
    MatTabsModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule,

  ]
})
export class AdminModule { }
