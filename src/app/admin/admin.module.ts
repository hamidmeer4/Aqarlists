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
import { PropertyComponent } from './property/property.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ReviewComponent } from './review/review.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminSideBarComponent,
    DashboardComponent,
    VerticaleChartComponent,
    PropertyComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxChartsModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule

  ]
})
export class AdminModule { }
