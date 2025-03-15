import { Component } from '@angular/core';
import { PropertyService } from '../services/property.service';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from '../services/loader.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-interior-apartment',
  templateUrl: './interior-apartment.component.html',
  styleUrls: ['./interior-apartment.component.scss'],
})
export class InteriorApartmentComponent {
  videoSource: string = 'assets/video/REAL-ESTATE-TOUR.mp4';
  isPlaying: boolean = false;
  apartmentId: number | any = null;
  propertiesByIdBase: any;


  constructor(private route: ActivatedRoute, private propertyService: PropertyService, private loader: LoaderService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.apartmentId =  params.get('id');
      if (this.apartmentId) {
        this.getPropertyById(this.apartmentId);
      }
    });
  }



  properties = [
    {
      name: 'Equestrian Family Home',
      location: 'California City, CA, USA',
      bed: 3,
      bath: 4,
      size: 1200,
      price: 14000,
      image: 'assets/images/pexels-zachtheshoota.png',
    },
    {
      name: 'Luxury Villa In Rego Park',
      location: 'California City, CA, USA',
      bed: 3,
      bath: 4,
      size: 1200,
      price: 82000,
      image: 'assets/images/property1.png',
    },
    {
      name: 'Equestrian Family Home',
      location: 'California City, CA, USA',
      bed: 3,
      bath: 4,
      size: 1200,
      price: 14000,
      image: 'assets/images/pexels-zachtheshoota.png',
    },
  ];

  reviews = [
    {
      name: 'Bessie Cooper',
      date: '12 March 2022',
      rating: 5,
      text: 'The second bedroom is a corner room with double windows. The kitchen has fabulous space, new appliances, and a laundry area. Other features include rich herringbone floors',
      images: [
        'assets/images/bedroom-with-bed.png',
        'assets/images/bedroom-with-bed.png',
        'assets/images/bedroom-with-bed.png',
        'assets/images/bedroom-with-bed.png',
      ],
    },
    {
      name: 'Bessie Cooper',
      date: '12 March 2022',
      rating: 5,
      text: 'The second bedroom is a corner room with double windows. The kitchen has fabulous space, new appliances, and a laundry area. Other features include rich herringbone floors',
      images: [],
    },
  ];

  floorPlans = [
    {
      name: 'First Floor',
      size: '1267 Sqft',
      bedrooms: 2,
      bathrooms: 2,
      price: '$920,99',
      image: 'assets/images/dummy.png',
      isOpen: false,
    },
    {
      name: 'Second Floor',
      size: '1267 Sqft',
      bedrooms: 2,
      bathrooms: 2,
      price: '$920,99',
      image: 'assets/images/dummy.png',
      isOpen: false,
    },
    {
      name: 'Third Floor',
      size: '1267 Sqft',
      bedrooms: 2,
      bathrooms: 2,
      price: '$920,99',
      image: 'assets/images/dummy.png',
      isOpen: false,
    },
  ];

  similarHomes = [
    { image: 'assets/home1.jpg', title: 'Luxury Villa', price: '$500,000' },
    { image: 'assets/home2.jpg', title: 'Modern Apartment', price: '$300,000' },
    { image: 'assets/home3.jpg', title: 'Cozy Home', price: '$250,000' },
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

  toggleDetails(floor: any): void {
    floor.isOpen = !floor.isOpen;
  }

  toggleVideo(videoPlayer: HTMLVideoElement): void {
    this.isPlaying ? videoPlayer.pause() : videoPlayer.play();
    this.isPlaying = !this.isPlaying;
  }
  previous() { }
  next() { }

  public getPropertyById(id: number) {
    this.loader.show();
    this.propertyService.getPropertiesById(id).pipe(
      finalize(() => this.loader.hide())
    )
      .subscribe(
        (resp) => {
          this.propertiesByIdBase = resp;
        },

      );
  }

}
