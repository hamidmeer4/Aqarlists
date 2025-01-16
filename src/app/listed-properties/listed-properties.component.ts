import { Component } from '@angular/core';

@Component({
  selector: 'app-listed-properties',
  templateUrl: './listed-properties.component.html',
  styleUrls: ['./listed-properties.component.scss']
})
export class ListedPropertiesComponent {
  properties = [
    { name: 'Equestrian Family Home', location: 'California City, CA, USA', bed: 3, bath: 4, size: 1200, price: 14000, image: 'assets/images/pexels-zachtheshoota.png', }
  ];
}
