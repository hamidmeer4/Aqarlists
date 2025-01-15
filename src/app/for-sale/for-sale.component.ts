import { Component } from '@angular/core';

@Component({
  selector: 'app-for-sale',
  templateUrl: './for-sale.component.html',
  styleUrls: ['./for-sale.component.scss']
})
export class ForSaleComponent {
  properties = [
    { name: 'Equestrian Family Home', location: 'California City, CA, USA', bed: 3, bath: 4, size: 1200, price: 14000, image: 'assets/images/pexels-zachtheshoota.png', },
    { name: 'Luxury Villa In Rego Park', location: 'California City, CA, USA', bed: 3, bath: 4, size: 1200, price: 82000, image: 'assets/images/property1.png', },
    { name: 'Equestrian Family Home', location: 'California City, CA, USA', bed: 3, bath: 4, size: 1200, price: 14000, image: 'assets/images/pexels-zachtheshoota.png', },
    { name: 'Luxury Villa In Rego Park', location: 'California City, CA, USA', bed: 3, bath: 4, size: 1200, price: 82000, image: 'assets/images/property1.png', },
    { name: 'Equestrian Family Home', location: 'California City, CA, USA', bed: 3, bath: 4, size: 1200, price: 14000, image: 'assets/images/pexels-zachtheshoota.png', },
    { name: 'Luxury Villa In Rego Park', location: 'California City, CA, USA', bed: 3, bath: 4, size: 1200, price: 82000, image: 'assets/images/property1.png', },
    { name: 'Equestrian Family Home', location: 'California City, CA, USA', bed: 3, bath: 4, size: 1200, price: 14000, image: 'assets/images/pexels-zachtheshoota.png', },
    { name: 'Luxury Villa In Rego Park', location: 'California City, CA, USA', bed: 3, bath: 4, size: 1200, price: 82000, image: 'assets/images/property1.png', },
  ];
}
