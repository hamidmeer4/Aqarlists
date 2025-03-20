import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';
import { PropertyService } from 'src/app/services/property.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
  properties: any[] = [];

  constructor(private propertyService: PropertyService, private toastService: ToastService, private loader:LoaderService){}

  ngOnInit(): void {
    this.propertyService.getAllPropertys().subscribe(resp => {
      this.properties = resp;
      this.toastService.showSuccess('Properties loaded successfully!');
    },
      (error) => {
        console.error('Error fetching properties:', error);
        this.toastService.showError('Failed to load properties. Please try again.');
      })
  }

  deleteProperty(id: number): void {
    this.loader.show();
    this.propertyService.removeProperty(id).pipe(
      finalize(() => this.loader.hide())
    ).subscribe(
      (resp) => {
        if (resp.isSuccessful) {
          this.properties = this.properties.filter(property => property.id !== id);
          this.toastService.showSuccess(resp.message || 'Property removed successfully!');
        } else {
          this.toastService.showError(resp.message || 'Failed to remove property. Please try again.');
        }
      },
    );
  }
}
