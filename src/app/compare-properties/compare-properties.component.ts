import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../services/toast.service';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-compare-properties',
  templateUrl: './compare-properties.component.html',
  styleUrls: ['./compare-properties.component.scss']
})
export class ComparePropertiesComponent implements OnInit {
  selectedProperties: number[] = [];
  selectedProperty: any;
  properties: any
  selectedPropertyId: any
  
  constructor(private propertyService: PropertyService, private toastService: ToastService,private router: Router,private route: ActivatedRoute){}
    ngOnInit(): void { 
      this.selectedPropertyId = this.propertyService.getSelectedProperty();
      if (this.selectedPropertyId ==  null)
      {
        this.router.navigate(['/for-sale']);
        return;
      }
      this.propertyService.getAllPropertys()
      .subscribe(resp =>{
       this.properties = resp;
       this.selectedProperty = this.properties?.find((propert: any) => propert.id == this.selectedPropertyId )
       this.toastService.showSuccess('Properties loaded successfully!');
      },
      (error) =>{
      this.toastService.showError('Failed to load properties. Please try again.');
      });
     }
 
onCheckboxChange(id: number, event: Event): void { 
  const isChecked = (event.target as HTMLInputElement).checked;

  if (isChecked) {
    this.selectedProperties.push(id);
  } else {
    this.selectedProperties = this.selectedProperties.filter(item => item !== id);
  }
}

  navigateWithId() {
    this.propertyService.setSelectedProperties(this.selectedProperties);
    this.router.navigate(['/compare-properties-detail',this.selectedPropertyId ]) 
  }

  oncancel()
  {
    this.router.navigate(['/compare-properties-detail',this.selectedPropertyId ]) 
  }

  updateProperties(properties: any) {
    this.properties = []
    this.properties = properties;

  }

}
