import { Component } from '@angular/core';

@Component({
  selector: 'app-compare-properties',
  templateUrl: './compare-properties.component.html',
  styleUrls: ['./compare-properties.component.scss']
})
export class ComparePropertiesComponent {
  apartmentTypes = [
    { img: 'assets/images/categories1.png', name: 'Home in Metric Way', rate: 'sAR 14,000 / mo', location: 'California City, CA, USA' },
    { img: 'assets/images/categories2.png', name: 'Home in Metric Way', rate: 'sAR 14,000 / mo', location: 'California City, CA, USA' },
  ];

  cards = [
    {
      image: 'assets/images/pexels.png',
      title: 'Equestrian Family Home',
      location: 'California City, CA, USA',
      bed: 3,
      bath: 4,
      area: 1200
    },
    {
      image: 'assets/images/pexels.png',
      title: 'Modern Apartment',
      location: 'New York, NY, USA',
      bed: 2,
      bath: 2,
      area: 900
    },
    {
      image: 'assets/images/pexels.png',
      title: 'Beachfront Villa',
      location: 'Miami, FL, USA',
      bed: 5,
      bath: 6,
      area: 3000
    },
    {
      image: 'assets/images/pexels.png',
      title: 'Equestrian Family Home',
      location: 'California City, CA, USA',
      bed: 3,
      bath: 4,
      area: 1200
    },
    {
      image: 'assets/images/pexels.png',
      title: 'Modern Apartment',
      location: 'New York, NY, USA',
      bed: 2,
      bath: 2,
      area: 900
    },
    {
      image: 'assets/images/pexels.png',
      title: 'Beachfront Villa',
      location: 'Miami, FL, USA',
      bed: 5,
      bath: 6,
      area: 3000
    },
    {
      image: 'assets/images/pexels.png',
      title: 'Equestrian Family Home',
      location: 'California City, CA, USA',
      bed: 3,
      bath: 4,
      area: 1200
    },
    {
      image: 'assets/images/pexels.png',
      title: 'Modern Apartment',
      location: 'New York, NY, USA',
      bed: 2,
      bath: 2,
      area: 900
    },
    {
      image: 'assets/images/pexels.png',
      title: 'Beachfront Villa',
      location: 'Miami, FL, USA',
      bed: 5,
      bath: 6,
      area: 3000
    },
    {
      image: 'assets/images/pexels.png',
      title: 'Equestrian Family Home',
      location: 'California City, CA, USA',
      bed: 3,
      bath: 4,
      area: 1200
    },
    {
      image: 'assets/images/pexels.png',
      title: 'Modern Apartment',
      location: 'New York, NY, USA',
      bed: 2,
      bath: 2,
      area: 900
    },
    {
      image: 'assets/images/pexels.png',
      title: 'Beachfront Villa',
      location: 'Miami, FL, USA',
      bed: 5,
      bath: 6,
      area: 3000
    }
  ];

}
