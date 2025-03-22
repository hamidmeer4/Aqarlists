import { Component } from '@angular/core';
import { PropertyService } from '../services/property.service';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from '../services/loader.service';
import { finalize } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-interior-apartment',
  templateUrl: './interior-apartment.component.html',
  styleUrls: ['./interior-apartment.component.scss'],
})
export class InteriorApartmentComponent {
  center: google.maps.LatLngLiteral = { lat: 24.4672, lng: 39.6024 };
  zoom = 14;
  markers: any = [];
  isPlaying: boolean = false;
  apartmentId: number | any = null;
  propertiesByIdBase: any;
  propertyTypes: { [key: string]: string } = {
    '1': 'Villa',
    '2': 'House',
    '3': 'Appartment',
    '4': 'Office'
  };

  filteredFeatures: string[] = [];
  safeSrc: SafeResourceUrl;
  constructor(private route: ActivatedRoute, private propertyService: PropertyService, private loader: LoaderService, private sanitizer: DomSanitizer) {
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/2yuIByK7BSw");
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.apartmentId = params.get('id');
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
          this.filteredFeatures = this.getTrueFeatures(this.propertiesByIdBase);
          if (this.propertiesByIdBase?.latitude && this.propertiesByIdBase?.longitude) {
            this.markers.push({ lat: this.propertiesByIdBase?.latitude, lng: this.propertiesByIdBase?.longitude })
          }
          if (this.propertiesByIdBase?.embedVideoId) {
            const videoUrl = this.propertiesByIdBase.embedVideoId;
            let videoId: string | null = null;

            if (videoUrl.includes('youtube.com/watch')) {
              const params = new URLSearchParams(videoUrl.split('?')[1]);
              videoId = params.get('v');
            } else if (videoUrl.includes('youtu.be/')) {
              videoId = videoUrl.split('youtu.be/')[1];
            }
            this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
              videoId ? `https://www.youtube.com/embed/${videoId}` : "https://www.youtube.com/watch?v=2yuIByK7BSw"
            );
          } else {
            this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/watch?v=2yuIByK7BSw");
          }
        },

      );
  }

  getPropertyName(id: string): string {
    return this.propertyTypes[id] || 'Unknown';
  }

  calculatePricePerSqFT(totalPrice: number, totalSqFT: number): number {
    return totalSqFT > 0 ? totalPrice / totalSqFT : 0;
  }

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }

  getTrueFeatures(properties: any): string[] {
    const featureNames: { [key: string]: string } = {
      airConditioning: 'Air Conditioning',
      lawn: 'Lawn',
      swimmingPool: 'Swimming Pool',
      microwave: 'Microwave',
      basketballCourt: 'Basketball Court',
      tvCable: 'TV Cable',
      dryer: 'Dryer',
      gym: 'Gym',
      sauna: 'Sauna',
      washer: 'Washer',
      wiFi: 'WiFi',
      barbeque: 'Barbeque',
      lakeView: 'Lake View',
      frontYard: 'Front Yard',
      backYard: 'Back Yard',
      refrigerator: 'Refrigerator',
      outdoorShower: 'Outdoor Shower',
      privateSpace: 'Private Space'
    };

    return Object.keys(properties)
      .filter(key => properties[key] && featureNames[key]) // Check if true & in allowed list
      .map(key => featureNames[key]); // Convert to readable names
  }

  getRowIndexes(featureCount: number): number[] {
    return Array.from({ length: Math.ceil(featureCount / 3) }, (_, i) => i * 3);
  }

}
