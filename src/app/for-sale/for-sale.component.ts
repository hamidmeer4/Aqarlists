import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../services/property.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-for-sale',
  templateUrl: './for-sale.component.html',
  styleUrls: ['./for-sale.component.scss']
})
export class ForSaleComponent implements OnInit {
 properties: any
 page: number = 1
 itemsPerPage= 6;
 start: number = 0;
 end: number = 0;
 
 constructor(private propertyService: PropertyService, private toastService: ToastService){}
  ngOnInit(): void { 
    this.propertyService.getAllPropertys()
    .subscribe(resp =>{
     this.properties = resp;
     this.toastService.showSuccess('Properties loaded successfully!');
    },
    (error) =>{
    this.toastService.showError('Failed to load properties. Please try again.');
    });
   }

  updateProperties(properties: any) {
    this.properties = properties;
     this.start = 0;
     this.end = 0;
     this.page = 1
  }

  getPropertyRange(): string {
     this.start = (this.page - 1) * this.itemsPerPage + 1;
     this.end = Math.min(this.page * this.itemsPerPage, this.properties?.length);
    return `${this.start} - ${this.end} of ${this.properties?.length}+ properties available`;
  }

  getPaginationMessage(): string {
    this.start = (this.page - 1) * this.itemsPerPage + 1;
    this.end = Math.min(this.page * this.itemsPerPage, this.properties?.length);
    return `Showing ${this.start} – ${this.end} of ${this.properties?.length} results`;
  }
  
}
