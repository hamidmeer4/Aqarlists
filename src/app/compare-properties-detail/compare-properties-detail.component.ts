import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../services/property.service';
import { ToastService } from '../services/toast.service';
import { LoaderService } from '../services/loader.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-compare-properties-detail',
  templateUrl: './compare-properties-detail.component.html',
  styleUrls: ['./compare-properties-detail.component.scss']
})
export class ComparePropertiesDetailComponent {
  public showCard: boolean = false;
  selectedProperty: any;
  selctedPropertyTableData: any
  propertyId: any
  receivedProperties: any
  propertyTypes: { [key: string]: string } = {
    '1': 'Villa',
    '2': 'House',
    '3': 'Appartment',
    '4': 'Office'
  };

  compareProperty: any
  public featureNames: any = {
    airConditioning: 'Air Conditioning',
    lawn: 'Lawn',
    swimmingPool: 'Swimming Pool',
    microwave: 'Microwave',
    basketballCourt: 'Basketball Court',
    tvCable: 'TV Cable',
    dryer: 'Dryer',
    gym: 'Gym',
    sauna: 'Sauna',
    washer: 'Washer',
    wiFi: 'WiFi',
    barbeque: 'Barbeque',
    lakeView: 'Lake View',
    frontYard: 'Front Yard',
    backYard: 'Back Yard',
    refrigerator: 'Refrigerator',
    outdoorShower: 'Outdoor Shower',
    privateSpace: 'Private Space'
  };



  constructor(private propertyService: PropertyService, private toastService: ToastService, private route: ActivatedRoute, private loader: LoaderService) { }

  ngOnInit(): void {
    this.propertyId = this.route.snapshot.paramMap.get('id');
    this.route.snapshot.paramMap.get('id')
    this.receivedProperties = this.propertyService.getSelectedProperties();
    this.propertyService.setSelectedProperty(this.propertyId);
    this.receivedProperties?.length > 0 ? this.getAllProperties() : this.getPropertyById(this.propertyId)


  }
  isBoolean(value: any): boolean {
    return typeof value === 'boolean';
  }

  public getPropertyById(id: number) {
    this.loader.show();
    this.propertyService.getPropertiesById(id).pipe(
      finalize(() => this.loader.hide())
    )
      .subscribe(
        (resp) => {
          this.selectedProperty = resp;
          this.generateSelectedPropertyTableData();
        },
      );
  }

  public getAllProperties() {
    this.propertyService.getAllPropertys()
      .subscribe(resp => {
        this.selectedProperty = resp.find((property: any) => property.id == this.propertyId);
        this.compareProperty = resp
          .filter((property: any) => this.receivedProperties.includes(property.id))
          .map((property: any) => ({
            ...property,
            tableData: this.generateTableData(property)
          }));
        this.showCard = true
        this.generateSelectedPropertyTableData();
      },
        (error) => {
          this.toastService.showError('Failed to load properties. Please try again.');
        });
  }

  getPropertyName(id: string): string {
    return this.propertyTypes[id] || 'Unknown';
  }

  generateSelectedPropertyTableData() {
    this.selctedPropertyTableData = [
      {
        property: 'Address',
        value: `${this.selectedProperty.address}, ${this.selectedProperty.city}, ${this.selectedProperty.country}`
      },
      { property: 'Zip Code', value: this.selectedProperty.zipCode },
      { property: 'Bedrooms', value: this.selectedProperty.numOfBedrooms },
      { property: 'Bathrooms', value: this.selectedProperty.numOfBathrooms },
      { property: 'Size', value: `${this.selectedProperty.size} Sq Ft` },
      { property: 'Price', value: `${this.selectedProperty.price} ${this.selectedProperty.afterPriceLabel}` },
      {
        property: 'Garage',
        value: this.selectedProperty.hasGarage
          ? `Yes (${this.selectedProperty.garageSize} Sq Ft)`
          : 'No'
      },
      { property: 'Floors', value: this.selectedProperty.numOfFloors }
    ];
    Object.keys(this.featureNames).forEach(key => {
      if (this.selectedProperty[key] === true) {
        this.selctedPropertyTableData.push({
          property: this.featureNames[key],
          value: true
        });
      }
    });
  }

  generateTableData(property: any) {
    let tableData = [
      { property: 'Address', value: `${property.address}, ${property.city}, ${property.country}` },
      { property: 'Zip Code', value: property.zipCode },
      { property: 'Bedrooms', value: property.numOfBedrooms },
      { property: 'Bathrooms', value: property.numOfBathrooms },
      { property: 'Size', value: `${property.size} Sq Ft` },
      { property: 'Price', value: `${property.price} ${property.afterPriceLabel}` },
      { property: 'Garage', value: property.hasGarage ? `Yes (${property.garageSize} Sq Ft)` : 'No' },
      { property: 'Floors', value: property.numOfFloors },
    ];

    Object.keys(this.featureNames).forEach(key => {
      if (property[key] === true) {
        tableData.push({ property: this.featureNames[key], value: property[key] });
      }
    });

    return tableData;
  }

  updateProperties(properties: any) {
    this.compareProperty = properties
      .map((property: any) => ({
        ...property,
        tableData: this.generateTableData(property)
      }));
    this.showCard = true;
  }
}
