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
  }
  
}
