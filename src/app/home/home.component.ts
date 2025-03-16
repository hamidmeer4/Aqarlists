import { Component } from '@angular/core';
import { PropertyService } from '../services/property.service';
import { ToastService } from '../services/toast.service';
import { MatDialog } from '@angular/material/dialog';
import { SideBarComponent } from '../side-bar/side-bar.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  selectedTab: string = 'buy';
  searchQuery: string = '';
  apartmentTypes = [
    { img: 'assets/images/categories1.png', name: 'House', properties: 22 },
    { img: 'assets/images/categories2.png', name: 'Apartments', properties: 22 },
    { img: 'assets/images/categories3.png', name: 'Office', properties: 22 },
    { img: 'assets/images/categories4.png', name: 'Villa', properties: 22 },
    { img: 'assets/images/categories1.png', name: 'Townhome', properties: 22 }
  ];

  cities = [
    { name: 'New York', properties: 12, image: './assets/images/rounded.png' },
    { name: 'Chicago', properties: 12, image: './assets/images/rounded.png' },
    { name: 'Manhattan', properties: 12, image: './assets/images/rounded.png' },
    { name: 'Francisco', properties: 12, image: './assets/images/rounded.png' },
    {
      name: 'Los Angeles',
      properties: 12,
      image: './assets/images/rounded.png',
    },
    {
      name: 'Los Angeles',
      properties: 12,
      image: './assets/images/rounded.png',
    },
    {
      name: 'Los Angeles',
      properties: 12,
      image: './assets/images/rounded.png',
    },
  ];

  filters = ['House', 'Villa', 'Office', 'Apartments'];
  selectedFilter = 'House';

 images = [
      './assets/images/property1.png',
       './assets/images/property2.png',
        './assets/images/property3.png',
         './assets/images/property3.png',
         './assets/images/property4.png',
        './assets/images/property5.png',
  ];

  customers = [
    { img: 'assets/images/img.png', name: 'Marvin McKinney', role: 'Designer' },
    { img: 'assets/images/img1.png', name: 'Ralph Edwards', role: 'Designer' },
    { img: 'assets/images/img.png', name: 'Annette Black', role: 'Designer' },
    { img: 'assets/images/img1.png', name: 'Jane Cooper', role: 'Designer' }
  ];


  testimonials = [
    {
      title: 'Great Work',
      text: '“Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.”',
      img: 'assets/images/img.png',
      name: 'Leslie Alexander',
      company: 'Nintendo'
    },
    {
      title: 'Awesome Design',
      text: '“Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.”',
      img: 'assets/images/img1.png',
      name: 'Floyd Miles',
      company: 'Bank of America'
    },
    {
      title: 'Perfect Quality',
      text: '“Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.”',
      img: 'assets/images/img.png',
      name: 'Dianne Russell',
      company: 'Facebook'
    },
    {
      title: 'Awesome Design',
      text: '“Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.”',
      img: 'assets/images/img1.png',
      name: 'Floyd Miles',
      company: 'Bank of America'
    },
  ];
  properties: any;
  allproperties: any;
  constructor(private propertyService: PropertyService, private toastService: ToastService, public dialog: MatDialog){}

  ngOnInit(): void { 
    this.propertyService.getAllPropertys()
    .subscribe(resp =>{
     this.properties = resp;
     this.allproperties = resp;
     this.toastService.showSuccess('Properties loaded successfully!');
    },
    (error) =>{
    this.toastService.showError('Failed to load properties. Please try again.');
    });
   }

   getRandomImage(): string {
    const randomIndex = Math.floor(Math.random() * this.images.length);
    return this.images[randomIndex];
  }


  buttons = [
    { id: 0, label: 'All', active: true },
    { id: 1, label: 'House', active: false },
    { id: 2, label: 'Villa', active: false },
    { id: 3, label: 'Office', active: false },
    { id: 4, label: 'Apartment', active: false }
  ];

  onButtonClick(selectedButton: any) {
    this.buttons.forEach((button) => (button.active = false));
    selectedButton.active = true;
    this.properties = selectedButton.id === 0
    ? this.allproperties 
    : this.allproperties.filter((property: any) => property.propertyTypeId === selectedButton.id);
  }

  onFilterChange(filter: string) {
    this.selectedFilter = filter;
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  onSearch() {
    const searchTerm = this.searchQuery?.trim();
    if(searchTerm)
    {
     this.propertyService.getPropertiesByCategory(searchTerm).subscribe(resp => {
      if(resp?.length)
      {
        this.properties = resp;
        this.allproperties = resp;
        this.toastService.showSuccess('Properties loaded successfully!');
      } else {
        this.toastService.showWarning('No records found.');
      }
       
     },
     (error) => {
      this.toastService.showError('Failed to fetch search results. Please try again.');
    })
    }
  }

  currentTestimonialIndex = 0;

  previous() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex > 0) ? this.currentTestimonialIndex - 1 : this.testimonials.length - 1;
  }

  next() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex < this.testimonials.length - 1) ? this.currentTestimonialIndex + 1 : 0;
  }

  openSidebarDialog() {
    const dialogRef = this.dialog.open(SideBarComponent, {
      width: '400px', 
      height: '100vh',
      position: { left: '35%' },
      panelClass: 'custom-dialog', 
    });

    dialogRef.afterClosed().subscribe((properties) => {
      if (properties) {
        this.properties = properties;
        this.allproperties = properties;
        this.onButtonClick(this.buttons[0]);
      }
    });
  }

}
