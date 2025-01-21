import { Component } from '@angular/core';

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
  videoSource: string = 'Youtube';
  videoId: string = '';
  countries = [
    { code: "US", name: "United States" },
    { code: "CA", name: "Canada" },
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


  removeImage(image: string): void {
    this.images = this.images.filter((img) => img !== image);
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
