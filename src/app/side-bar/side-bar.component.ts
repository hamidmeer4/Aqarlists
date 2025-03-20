import { Component, EventEmitter, Optional, Output } from '@angular/core';
import { PropertyService } from '../services/property.service';
import { ToastService } from '../services/toast.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  @Output() propertiesEmitted = new EventEmitter<any[]>();
  searchQuery: string = '';
  listingStatus: string = 'for sale';
  selectedPropertyTypes: string[] = [];
  minPrice: number | null = null;
  maxPrice: number | null = null;
  location: string = 'All Cities';
  area: string = 'All Areas';
  minSqft: number | null = null;
  maxSqft: number | null = null;
  minYear: number | null = null;
  maxYear: number | null = null;
  bedrooms: number | null = null;
  bathrooms: number | null = null;
  propertyTypes = [
    { id: '2', label: 'Houses', selected: false },
    { id: '3', label: 'Apartments', selected: true },
    { id: '4', label: 'Office', selected: false },
    { id: '1', label: 'Villa', selected: false },
  ];
  properties: any

  cityNames = [
    "Riyadh",
    "Jeddah",
    "Mecca",
    "Medina",
    "Dammam",
    "Taif",
    "Al Khobar",
    "Abha",
    "Jubail",
    "Yanbu"
  ];

  constructor(
    private propertyService: PropertyService,
    private toastService: ToastService,
    @Optional() private dialogRef?: MatDialogRef<SideBarComponent>,
  ) { }

  onSearch() {
    const filters = {
      description: this.searchQuery.trim() || '',
      listingStatus: this.listingStatus || null,
      propertyType: this.selectedPropertyTypes.length ? this.selectedPropertyTypes : [],
      minPriceFilter: this.minPrice ?? null,
      maxPriceFilter: this.maxPrice ?? null,
      cityFilter: this.location && this.location !== 'All Cities' ? this.location : null,
      areaFilter: this.area && this.area !== 'All Areas' ? this.area : null,
      minSizeFilter: this.minSqft ?? null,
      maxSizeFilter: this.maxSqft ?? null,
      yearBuildFrom: this.minYear ?? null,
      yearBuildTo: this.maxYear ?? null,
      bedrooms: this.bedrooms ?? null,
      bathrooms: this.bathrooms ?? null
    };

    this.propertyService.getFilteredProperties(filters).subscribe(
      (resp) => {
        if (resp?.length > 0) {
          this.properties = resp;
          this.propertiesEmitted.emit(this.properties);
          if (this.dialogRef) {
            this.dialogRef.close(this.properties);
          }

          this.toastService.showSuccess('Properties loaded successfully!');
        } else {
          this.properties = [];

          if (this.dialogRef) {
            this.dialogRef.close();
          }

          this.toastService.showWarning('No records found.');
        }
      },
      (error) => {
        console.error('Error fetching properties:', error);

        if (this.dialogRef) {
          this.dialogRef.close();
        }

        this.toastService.showError('Failed to fetch properties.');
      }
    );
  }




  updatePropertyType() {
    this.selectedPropertyTypes = this.propertyTypes
      .filter(type => type.selected)
      .map(type => type.id);
  }

  resetFilters() {
    this.listingStatus = 'for sale';
    this.propertyTypes.forEach(type => (type.selected = false));
    this.selectedPropertyTypes = [];
    this.searchQuery = '';
    this.minPrice = null;
    this.maxPrice = null;
    this.minYear = null;
    this.maxYear = null;
    this.bathrooms = null;
    this.bedrooms = null;
    this.location = 'All Cities';
    this.area = 'All Areas';
  }

}
