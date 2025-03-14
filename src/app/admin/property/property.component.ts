import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
  images = [
       'assets/images/prop1.jpg',
       'assets/images/prop2.jpg',
       'assets/images/prop3.jpg',
       'assets/images/prop4.jpg',
       'assets/images/prop5.jpg',
       'assets/images/prop3.jpg',
       'assets/images/prop4.jpg',
       'assets/images/prop5.jpg',
  ];

  properties: any

  constructor(private propertyService: PropertyService, private toastService: ToastService){}

  ngOnInit(): void { 
   this.propertyService.getAllPropertys().subscribe(resp =>{
    this.properties = resp;
    this.toastService.showSuccess('Properties loaded successfully!');
  },
   (error) => {
    console.error('Error fetching properties:', error);
    this.toastService.showError('Failed to load properties. Please try again.');
  })
  }

  getRandomImage(): string {
    const randomIndex = Math.floor(Math.random() * this.images.length);
    return this.images[randomIndex];
  }
}
