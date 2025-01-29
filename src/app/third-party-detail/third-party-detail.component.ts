import { Component } from '@angular/core';

@Component({
  selector: 'app-third-party-detail',
  templateUrl: './third-party-detail.component.html',
  styleUrls: ['./third-party-detail.component.scss']
})
export class ThirdPartyDetailComponent {
  properties = [
    { name: 'Equestrian Family Home', location: 'California City, CA, USA', bed: 3, bath: 4, size: 1200, price: 14000, image: 'assets/images/pexels-zachtheshoota.png', },
    { name: 'Luxury Villa In Rego Park', location: 'California City, CA, USA', bed: 3, bath: 4, size: 1200, price: 82000, image: 'assets/images/property1.png', },
    { name: 'Equestrian Family Home', location: 'California City, CA, USA', bed: 3, bath: 4, size: 1200, price: 14000, image: 'assets/images/pexels-zachtheshoota.png', },
    { name: 'Luxury Villa In Rego Park', location: 'California City, CA, USA', bed: 3, bath: 4, size: 1200, price: 82000, image: 'assets/images/property1.png', },
  ];


  public agents = [
    {
      name: 'Arlene McCoy',
      role: 'Real Estate',
      image: 'assets/images/agent12.png',
    },
    {
      name: 'Esther Howard',
      role: 'Agent',
      image: 'assets/images/agent2.png'
    },
    {
      name: 'Cody Fisher',
      role: 'Property Cons',
      image: 'assets/images/agent3.png',
    }
  ];

  reviews = [
    {
      name: 'Bessie Cooper',
      date: '12 March 2022',
      rating: 5,
      text: 'The second bedroom is a corner room with double windows. The kitchen has fabulous space, new appliances, and a laundry area. Other features include rich herringbone floors',
      images: ['assets/images/bedroom-with-bed-lamp-ceiling.png', 'assets/images/bedroom-with-bed-picture-man-wall.png', 'assets/images/bedroom-with-bed-lamp-ceiling.png', 'assets/images/bedroom-with-bed-picture-man-wall.png']
    },
    {
      name: 'Bessie Cooper',
      date: '12 March 2022',
      rating: 5,
      text: 'The second bedroom is a corner room with double windows. The kitchen has fabulous space, new appliances, and a laundry area. Other features include rich herringbone floors',
      images: []
    }
  ];
  openWhatsApp(): void {
    const phoneNumber = '1234567890';
    const message = encodeURIComponent(
      'Hello, I am interested in your property!'
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }

  openApp(): void {
    const appUrl = 'your-app-url';
    window.open(appUrl, '_blank');
  }

}
