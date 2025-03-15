import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../services/property.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-for-sale',
  templateUrl: './for-sale.component.html',
  styleUrls: ['./for-sale.component.scss']
})
export class ForSaleComponent implements OnInit {
  images = [
     'assets/images/pexels-zachtheshoota.png', 
    'assets/images/property1.png', 
     'assets/images/pexels-zachtheshoota.png', 
    'assets/images/property1.png', 
     'assets/images/pexels-zachtheshoota.png', 
    'assets/images/property1.png', 
     'assets/images/pexels-zachtheshoota.png', 
    'assets/images/property1.png', 
  ];

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

   getRandomImage(): string {
    const randomIndex = Math.floor(Math.random() * this.images.length);
    return this.images[randomIndex];
  }

  updateProperties(properties: any) {
    this.properties = properties;
  }
  
}
