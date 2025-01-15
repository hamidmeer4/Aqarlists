import { Component } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent {
  companies = [
    {
      name: 'Amazon',
      logo: 'assets/icons/amazon.png',
      rating: 4.6,
      address: '1611 Michigan Ave, Miami Beach, FL 33139',
    },
    {
      name: 'AMD',
      logo: 'assets/icons/amd.png',
      rating: 4.6,
      address: '1611 Michigan Ave, Miami Beach, FL 33139',
    },
    {
      name: 'Cisco',
      logo: 'assets/icons/cisco2.png',
      rating: 4.6,
      address: '1611 Michigan Ave, Miami Beach, FL 33139',
    },
    {
      name: 'Dropcam',
      logo: 'assets/icons/dropcam.png',
      rating: 4.6,
      address: '1611 Michigan Ave, Miami Beach, FL 33139',
    },
    {
      name: 'Logitech',
      logo: 'assets/icons/logitech.png',
      rating: 4.6,
      address: '1611 Michigan Ave, Miami Beach, FL 33139',
    },
    {
      name: 'Spotify',
      logo: 'assets/icons/spotify.png',
      rating: 4.6,
      address: '1611 Michigan Ave, Miami Beach, FL 33139',
    },
  ];
}
