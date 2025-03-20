import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
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
}
