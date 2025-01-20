import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent {
  reviews = [
    {
      name: 'Bessie Cooper',
      date: '12 March 2022',
      rating: 5,
      text: 'The second bedroom is a corner room with double windows. The kitchen has fabulous space, new appliances, and a laundry area. Other features include rich herringbone floors',
      images: [
        'assets/images/bed1.jpg',
        'assets/images/bed2.jpg',
        'assets/images/bed3.jpg',
        'assets/images/bed4.jpg',
      ],
    },
    {
      name: 'Darrell Steward',
      date: '12 March 2022',
      rating: 5,
      text: 'The second bedroom is a corner room with double windows. The kitchen has fabulous space, new appliances, and a laundry area. Other features include rich herringbone floors',
      images: [],
    },
    {
      name: 'Bessie Cooper',
      date: '12 March 2022',
      rating: 5,
      text: 'The second bedroom is a corner room with double windows. The kitchen has fabulous space, new appliances, and a laundry area. Other features include rich herringbone floors',
      images: [],
    },
  ];
}
