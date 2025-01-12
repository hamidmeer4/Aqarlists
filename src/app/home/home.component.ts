import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  selectedTab: string = 'buy';
  searchQuery: string = '';

  cities = [
    { name: 'New York', properties: 12, image: './assets/images/rounded.png' },
    { name: 'Chicago', properties: 12, image: './assets/images/rounded.png' },
    { name: 'Manhattan', properties: 12, image: './assets/images/rounded.png' },
    { name: 'Francisco', properties: 12, image: './assets/images/rounded.png' },
    {
      name: 'Los Angeles',
      properties: 12,
      image: './assets/images/rounded.png',
    },
    {
      name: 'Los Angeles',
      properties: 12,
      image: './assets/images/rounded.png',
    },
    {
      name: 'Los Angeles',
      properties: 12,
      image: './assets/images/rounded.png',
    },
  ];

  filters = ['House', 'Villa', 'Office', 'Apartments'];
  selectedFilter = 'House';

  properties = [
    {
      name: 'Equestrian Family Home',
      location: 'California City, CA, USA',
      price: 14000,
      image: './assets/images/property1.png',
      featured: true,
      sale: true,
    },
    {
      name: 'Luxury Villa in Rego..',
      location: 'California City, CA, USA',
      price: 18000,
      image: './assets/images/property2.png',
      featured: true,
      sale: true,
    },
    {
      name: 'Villa on Hollywood..',
      location: 'California City, CA, USA',
      price: 22000,
      image: './assets/images/property3.png',
      featured: false,
      sale: false,
    },
    {
      name: 'Northwest Office Space',
      location: 'California City, CA, USA',
      price: 12000,
      image: './assets/images/property3.png',
      featured: false,
      sale: false,
    },
    {
      name: 'Affordable Green Villa...',
      location: 'California City, CA, USA',
      price: 12000,
      image: './assets/images/property4.png',
      featured: false,
      sale: false,
    },
    {
      name: 'Sky Pool Villa House',
      location: 'California City, CA, USA',
      price: 12000,
      image: './assets/images/property5.png',
      featured: false,
      sale: false,
    },
  ];

  buttons = [
    { label: 'House', active: true },
    { label: 'Villa', active: false },
    { label: 'Office', active: false },
    { label: 'Apartment', active: false },
  ];

  onButtonClick(selectedButton: any) {
    this.buttons.forEach((button) => (button.active = false));
    selectedButton.active = true;
  }

  onFilterChange(filter: string) {
    this.selectedFilter = filter;
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  onSearch() {
    console.log(
      `Searching for ${this.searchQuery} in ${this.selectedTab} tab.`
    );
  }
}
