import { Component } from '@angular/core';

@Component({
  selector: 'app-compare-properties-detail',
  templateUrl: './compare-properties-detail.component.html',
  styleUrls: ['./compare-properties-detail.component.scss']
})
export class ComparePropertiesDetailComponent {
  properties = [
    {
      name: 'Home in Metric Way',
      price: 'SAR 14,000',
      location: 'California City, CA, USA',
      image: 'assets/images/categories1.png',
    },
    {
      name: 'Villa on Hollywood Boulevard',
      price: 'SAR 14,000',
      location: 'California City, CA, USA',
      image: 'assets/images/categories2.png'
    }
  ];

  tableData = [
    { property: 'Address', apartment: 'Quincy St', studio: '8100 S Ashland Ave', villa: '194 Mercer Street' },
    { property: 'City', apartment: 'Riyadh', studio: 'Riyadh', villa: 'Riyadh' },
    { property: 'State/County', apartment: 'Riyadh', studio: 'Riyadh', villa: 'Riyadh' },
    { property: 'Zip/Postal Code', apartment: '10013', studio: '10013', villa: '10013' },
    { property: 'Country', apartment: 'Saudi Arabia', studio: 'Saudi Arabia', villa: 'Saudi Arabia' },
    { property: 'Property Size', apartment: '2560 Sq Ft', studio: '2560 Sq Ft', villa: '2560 Sq Ft' },
    { property: 'Property ID', apartment: 'R43', studio: 'R43', villa: 'R43' },
    { property: 'Bedrooms', apartment: 3, studio: 2, villa: 5 },
    { property: 'Bathrooms', apartment: 1, studio: 4, villa: 3 },
    { property: 'Garage', apartment: 1, studio: 4, villa: 3 },
    { property: 'Air Conditioning', apartment: true, studio: true, villa: true },
    { property: 'Barbeque', apartment: false, studio: false, villa: false },
    { property: 'Gym', apartment: true, studio: true, villa: true },
    { property: 'Swimming Pool', apartment: true, studio: true, villa: true },
    { property: 'TV Cable', apartment: true, studio: true, villa: true },
  ];

  isBoolean(value: any): boolean {
    return typeof value === 'boolean';
  }
}
