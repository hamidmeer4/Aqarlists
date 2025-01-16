import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  public agents = [
    {
      name: 'Arlene McCoy',
      role: 'Real Estate',
      image: 'assets/images/agent12.png',
    },
    { 
      name: 'Esther Howard',
      role: 'Agent', 
      image: 'assets/images/agent2.png' },
    {
      name: 'Cody Fisher',
      role: 'Property Cons',
      image: 'assets/images/agent3.png',
    },
    {
      name: 'Bessie Cooper',
      role: 'Real Estate',
      image: 'assets/images/agent4.png',
    },
    {
      name: 'Guy Hawkins',
      role: 'Property Spec',
      image: 'assets/images/agent5.png',
    },
  ];
}
