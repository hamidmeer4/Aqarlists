import { Component } from '@angular/core';

@Component({
  selector: 'app-listed-properties',
  templateUrl: './listed-properties.component.html',
  styleUrls: ['./listed-properties.component.scss']
})
export class ListedPropertiesComponent {
  properties: any[] = [];

  updateProperties(properties: any) {
    this.properties = properties;
 }

}
