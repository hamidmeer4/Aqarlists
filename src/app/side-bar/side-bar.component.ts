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
  listingStatus: string = '';
  selectedPropertyTypes: number[] = [];
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
    { id: 1, label: 'Houses', selected: false },
    { id: 2, label: 'Apartments', selected: true },
    { id: 3, label: 'Office', selected: false },
    { id: 4, label: 'Villa', selected: false },
    { id: 5, label: 'Townhome', selected: false },
  ];
  properties: any

  constructor(
    private propertyService: PropertyService,
    private toastService: ToastService,
    @Optional() private dialogRef?: MatDialogRef<SideBarComponent>,
  ) { }

  onSearch() {
    const params = new URLSearchParams();
    if (this.searchQuery.trim()) params.append('search', this.searchQuery.trim());
    if (this.listingStatus) params.append('ListingStatus', this.listingStatus);
    if (this.selectedPropertyTypes.length) params.append('PropertyType', this.selectedPropertyTypes.join(','));
    if (this.minPrice !== null) params.append('MinPriceFilter', this.minPrice.toString());
    if (this.maxPrice !== null) params.append('MaxPriceFilter', this.maxPrice.toString());
    if (this.location && this.location !== 'All Cities') params.append('CityFilter', this.location);
    if (this.area && this.area !== 'All Areas') params.append('AreaFilter', this.area);
    if (this.minSqft !== null) params.append('MinSizeFilter', this.minSqft.toString());
    if (this.maxSqft !== null) params.append('MaxSizeFilter', this.maxSqft.toString());
    if (this.minYear !== null) params.append('YearBuildFrom', this.minYear.toString());
    if (this.maxYear !== null) params.append('YearBuildTo', this.maxYear.toString());
    if (this.bedrooms !== null) params.append('Bedrooms', this.bedrooms.toString());
    if (this.bathrooms !== null) params.append('Bathrooms', this.bathrooms.toString());

    this.propertyService.getFilteredProperties(params).subscribe(
      (resp) => {
        if (resp?.length > 0) {
          this.properties = resp;
          this.propertiesEmitted.emit(this.properties);
          this.dialogRef ? this.dialogRef.close(this.properties) : null;
          this.toastService.showSuccess('Properties loaded successfully!');

        } else {
          this.properties = [];
          this.dialogRef ? this.dialogRef.close() : null;
          this.toastService.showWarning('No records found.');
        }
      },
      (error) => {
        console.error('Error fetching properties:', error);
        this.dialogRef ? this.dialogRef.close() : null;
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
    this.listingStatus = '';
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
