import { Component } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { finalize } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';
import { PropertyService } from 'src/app/services/property.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent {
  center: google.maps.LatLngLiteral = { lat: 24.4672, lng: 39.6024 };
  zoom = 14;
  markers: any = [];
  categories = ['Residential', 'Commercial', 'Industrial'];
   cityNames = [
    "Riyadh",
    "Jeddah",
    "Mecca",
    "Medina",
    "Dammam",
    "Taif",
    "Al Khobar",
    "Abha",
    "Jubail",
    "Yanbu"
  ];
  
  
  listings = ['For Sale', 'For Rent'];
  statuses = ['Available', 'Sold', 'Pending'];
  states = ['State 1', 'State 2', 'State 3'];
  images: { id: number; name: string; fileUrl: string; file: File , imageId: number}[] = [];
  imageIdCounter = 0;
  selectedTabIndex = 0;
  videoSource: string = 'Youtube';
  videoId: string = '';
  countries = [
    { code: "US", name: "United States" },
    { code: "SA", name: "Saudi Arabia" },
    { code: "IN", name: "India" },
    { code: "GB", name: "United Kingdom" },
    { code: "AU", name: "Australia" },
    { code: "DE", name: "Germany" },
    { code: "FR", name: "France" },
    { code: "IT", name: "Italy" },
    { code: "ES", name: "Spain" },
    { code: "MX", name: "Mexico" },
    { code: "BR", name: "Brazil" },
    { code: "JP", name: "Japan" },
    { code: "CN", name: "China" },
    { code: "RU", name: "Russia" },
    { code: "KR", name: "South Korea" },
    { code: "ZA", name: "South Africa" },
    { code: "EG", name: "Egypt" },
    { code: "NG", name: "Nigeria" },
    { code: "SE", name: "Sweden" },
    { code: "NO", name: "Norway" }
  ];
  amenities = [
    { value: 'airConditioning', label: 'Air Conditioning' },
    { value: 'lawn', label: 'Lawn' },
    { value: 'swimmingPool', label: 'Swimming Pool' },
    { value: 'microwave', label: 'Microwave' },
    { value: 'basketballCourt', label: 'Basketball Court' },
    { value: 'tvCable', label: 'TV Cable' },
    { value: 'dryer', label: 'Dryer' },
    { value: 'gym', label: 'Gym' },
    { value: 'sauna', label: 'Sauna' },
    { value: 'washer', label: 'Washer' },
    { value: 'wiFi', label: 'WiFi' },
    { value: 'barbeque', label: 'Barbeque' },
    { value: 'lakeView', label: 'Lake View' },
    { value: 'frontYard', label: 'Front Yard' },
    { value: 'backYard', label: 'Back Yard' },
    { value: 'refrigerator', label: 'Refrigerator' },
    { value: 'outdoorShower', label: 'Outdoor Shower' },
    { value: 'privateSpace', label: 'Private Space' }
  ];
  selectedAmenities: { [key: string]: boolean } = {};

  propertyData = {
    name: '',
    description: '',
    category: '',
    listedIn: '',
    status: '',
    price: 0,
    yearlyTaxRate: 0,
    afterPriceLabel: '',
    videoFrom: '',
    embedVideoId: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    state: '',
    neighbourhood: '',
    latitude: 0,
    longitude: 0,
    size: 0,
    lotSize: 0,
    numOfRooms: 0,
    customId: '',
    hasGarage: false,
    garageSize: 0,
    yearBuilt: 0,
    availableFrom: null,
    hasBasement: false,
    numOfFloors: 0,
    roofing: '',
    exteriorMaterial: '',
    floorNumber: 0,
    ownerOrAgentNotes: '',
    numOfBedrooms: 0,
    numOfBathrooms: 0,
    propertyTypeId: 0,
    mainAttachment: [] as { id: number; name: string; fileUrl: string }[],  
    AttachmentIds: [] as number[]
  };

  constructor(private propertyService: PropertyService, private loaderService: LoaderService, private toastService: ToastService) { }

  removeImage(id: number): void {
    this.images = this.images.filter(img => img.imageId !== id);
  }

  saveData() {
    this.loaderService.show();
    this.propertyData.AttachmentIds = this.images.map(img => img.id)
    this.propertyData.hasGarage = this.propertyData.hasGarage ? true : false;
    this.propertyData.hasBasement = this.propertyData.hasBasement ? true : false;
    this.propertyData.floorNumber = +this.propertyData.floorNumber;
    this.propertyData.propertyTypeId = +this.propertyData.propertyTypeId;
    this.propertyData = { ...this.propertyData, ...this.selectedAmenities };

    this.propertyService.sendPropertyData(this.propertyData).pipe(
      finalize(()=> this.loaderService.hide())
    ).subscribe(resp => {
      if (resp) {
        this.toastService.showSuccess('Property added successfully!');
        this.selectedTabIndex = 0; 
      }
    },
    (error) => {
      console.error('Property Addition Error:', error);
      this.toastService.showError('Failed to add property. Please try again.');
    })
  }

  goToNextTab(tabGroup: MatTabGroup) {
    if (tabGroup.selectedIndex !== null) {
      tabGroup.selectedIndex += 1;
    }
  }

  goToPreviousTab(tabGroup: MatTabGroup) {
    if (tabGroup.selectedIndex !== null && tabGroup.selectedIndex > 0) {
      tabGroup.selectedIndex -= 1;
    }
  }

  
  onFilesSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.images.push({
          id: 0,
          imageId: ++this.imageIdCounter,
          name: file.name,
          fileUrl: e.target.result,
          file: file
        });
        this.uploadImage(this.imageIdCounter)
      };
      reader.readAsDataURL(file);
    }
  }

  uploadImage(index: number) {
    const selectedImage = this.images[index - 1];
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append('model', selectedImage.file, selectedImage.name);


     this.propertyService.uploadImage( formData).subscribe(
      (response) => {
        if(response?.isSuccessful)
        {
           this.toastService.showSuccess('uploaded successfully!');
           this.images[index-1].id = response.data
        }
        else {
          this.toastService.showError('Failed to upload image')
          this.removeImage(index-1)
        }   
      },
      (error) => {
        this.toastService.showError('Failed to upload image')
        this.removeImage(index-1)
      }
    );
  }
  

  moveMap(event: google.maps.MapMouseEvent) {
    this.markers = [];
    this.propertyData.latitude = event.latLng?.lat() ? event.latLng?.lat() : 0;
    this.propertyData.longitude = event.latLng?.lng() ? event.latLng?.lng() : 0;
    if (event.latLng != null)  this.center = event.latLng.toJSON();
    this.markers.push({ lat: this.propertyData?.latitude, lng: this.propertyData?.longitude })
  }

  onCoordinatesChange()
  {
    if(this.isValidLatLng(this.propertyData.latitude,this.propertyData.longitude) && this.propertyData.latitude > 0 && this.propertyData.longitude > 0)
    {
      this.markers.push({ lat: this.propertyData?.latitude, lng: this.propertyData?.longitude })
    }
  }

    
  isValidLatLng(lat: number, lng: number): boolean {
    return lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180;
  }
}
