import { Component } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent {
  categories = ['Residential', 'Commercial', 'Industrial'];
  listings = ['For Sale', 'For Rent'];
  statuses = ['Available', 'Sold', 'Pending'];
  states = ['State 1', 'State 2', 'State 3'];
  images: string[] = [
    '../../../assets/images/categories1.png',
    '../../../assets/images/categories2.png',
    '../../../assets/images/categories3.png',
  ];
  selectedTabIndex = 0;
  videoSource: string = 'Youtube';
  videoId: string = '';
  countries = [
    { code: "US", name: "United States" },
    { code: "SA", name: "Saudi Arabia" },
    { code: "IN", name: "India" },
    { code: "GB", name: "United Kingdom" },
    { code: "AU", name: "Australia" },
    { code: "DE", name: "Germany" },
    { code: "FR", name: "France" },
    { code: "IT", name: "Italy" },
    { code: "ES", name: "Spain" },
    { code: "MX", name: "Mexico" },
    { code: "BR", name: "Brazil" },
    { code: "JP", name: "Japan" },
    { code: "CN", name: "China" },
    { code: "RU", name: "Russia" },
    { code: "KR", name: "South Korea" },
    { code: "ZA", name: "South Africa" },
    { code: "EG", name: "Egypt" },
    { code: "NG", name: "Nigeria" },
    { code: "SE", name: "Sweden" },
    { code: "NO", name: "Norway" }
  ];

  propertyData = {
    // id: 0,
    name: '',
    description: '',
    category: '',
    listedIn: '',
    status: '',
    price: 0,
    yearlyTaxRate: 0,
    afterPriceLabel: 0,
    videoFrom: '',
    embedVideoId: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    state: '',
    neighbourhood: '',
    latitude: 0,
    longitude: 0,
    size: 0,
    lotSize: 0,
    numOfRooms: 0,
    customId: '',
    hasGarage: false,
    garageSize: 0,
    yearBuilt: 0,
    availableFrom: null,
    hasBasement: false,
    numOfFloors: 0,
    roofing: '',
    exteriorMaterial: '',
    floorNumber: 0,
    // ownerOrAgentNotes: '',
    numOfBedrooms: 0,
    numOfBathrooms: 0,
    propertyTypeId: 0,
    // amenities: '',
    // attachments: null,
    // mainAttachmentId: 0
  };

  constructor(private propertyService: PropertyService) { }

  removeImage(image: string): void {
    this.images = this.images.filter((img) => img !== image);
  }

  saveData() {
    this.propertyData.hasGarage = this.propertyData.hasGarage ? true : false;
    this.propertyData.hasBasement = this.propertyData.hasBasement ? true : false;
    this.propertyData.floorNumber = +this.propertyData.floorNumber;
    this.propertyData.propertyTypeId = +this.propertyData.propertyTypeId;
    this.propertyService.sendPropertyData(this.propertyData).subscribe(resp => {
      if (resp) {
        this.selectedTabIndex = 0; 
      }
    })
  }

  goToNextTab(tabGroup: MatTabGroup) {
    if (tabGroup.selectedIndex !== null) {
      tabGroup.selectedIndex += 1;
    }
  }

  goToPreviousTab(tabGroup: MatTabGroup) {
    if (tabGroup.selectedIndex !== null && tabGroup.selectedIndex > 0) {
      tabGroup.selectedIndex -= 1;
    }
  }

  amenities = [
    'Air Conditioning',
    'Lawn',
    'Swimming Pool',
    'Microwave',
    'Basketball Court',
    'TV Cable',
    'Dryer',
    'Gym',
    'Sauna',
    'Washer',
    'WiFi',
    'Barbeque',
    'Lake View',
    'Front Yard',
    'Back Yard',
    'Refrigerator',
    'Outdoor Shower',
    'Private Space'
  ];
  selectedAmenities: { [key: string]: boolean } = {};
}
