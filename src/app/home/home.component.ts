import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  selectedTab: string = 'buy';
  searchQuery: string = '';
  apartmentTypes = [
    { img: 'assets/images/categories1.png', name: 'House', properties: 22 },
    { img: 'assets/images/categories2.png', name: 'Apartments', properties: 22 },
    { img: 'assets/images/categories3.png', name: 'Office', properties: 22 },
    { img: 'assets/images/categories4.png', name: 'Villa', properties: 22 },
    { img: 'assets/images/categories1.png', name: 'Townhome', properties: 22 }
  ];

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

  customers = [
    { img: 'assets/images/img.png', name: 'Marvin McKinney', role: 'Designer' },
    { img: 'assets/images/img1.png', name: 'Ralph Edwards', role: 'Designer' },
    { img: 'assets/images/img.png', name: 'Annette Black', role: 'Designer' },
    { img: 'assets/images/img1.png', name: 'Jane Cooper', role: 'Designer' }
  ];


  testimonials = [
    {
      title: 'Great Work',
      text: '“Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.”',
      img: 'assets/images/img.png',
      name: 'Leslie Alexander',
      company: 'Nintendo'
    },
    {
      title: 'Awesome Design',
      text: '“Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.”',
      img: 'assets/images/img1.png',
      name: 'Floyd Miles',
      company: 'Bank of America'
    },
    {
      title: 'Perfect Quality',
      text: '“Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.”',
      img: 'assets/images/img.png',
      name: 'Dianne Russell',
      company: 'Facebook'
    },
    {
      title: 'Awesome Design',
      text: '“Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.”',
      img: 'assets/images/img1.png',
      name: 'Floyd Miles',
      company: 'Bank of America'
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

  currentTestimonialIndex = 0;

  previous() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex > 0) ? this.currentTestimonialIndex - 1 : this.testimonials.length - 1;
  }

  next() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex < this.testimonials.length - 1) ? this.currentTestimonialIndex + 1 : 0;
  }

}
