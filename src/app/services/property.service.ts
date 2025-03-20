import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private selectedProperties: number[] = [];
  private selectedProperty: number | null = null; // Stores a single selected ID


  private apiUrl = 'https://ec2-34-229-116-30.compute-1.amazonaws.com/api/Property/';
  constructor(private http: HttpClient, private authService: AuthService) { }


  getAllPropertys(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}get/all`)
  }

  getPropertiesById(id: number): Observable<any> {
    const url = `${this.apiUrl}${id}:int`;
    return this.http.get<any>(url);
  }

  propertyCountByCity(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}propertyCountByCity`);
  }
  
  removeProperty(id: number): Observable<any> {
    const url = `${this.apiUrl}${id}:int`;
    return this.http.delete<any>(url);
  }
  
  sendPropertyData(propertyData: any): Observable<any> {
    const toQueryString = (obj: any): string => {
      return Object.keys(obj)
        .filter(key => obj[key] !== null && obj[key] !== undefined) 
        .map(key => {
          const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
          return `${encodeURIComponent(capitalizedKey)}=${encodeURIComponent(obj[key])}`;
        })
        .join("&");
    };
    const token = this.authService.getToken();
    const queryParams = toQueryString(propertyData);
    const apiUrl = `${this.apiUrl}add`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` 
    });
    return this.http.post<any>(apiUrl, propertyData, { headers })
  }

  getFilteredProperties(finalParams: any): Observable<any> {
    const apiUrl = `${this.apiUrl}by/category`;
    return this.http.post<any>(apiUrl, finalParams);
  }
  
  getPropertiesByCategory(searchTerm: string = ''): Observable<any> {
    const url = `${this.apiUrl}by/category?search=${searchTerm}`;
    return this.http.post<any>(url,null);
  }

  uploadImage(data: any): Observable<any>{
    const url = `${this.apiUrl}uploadImages`;
    return this.http.post<any>(url,data);
  }


  setSelectedProperties(properties: number[]) {
    this.selectedProperties = properties;
  }

  getSelectedProperties(): number[] {
    return this.selectedProperties;
  }

  setSelectedProperty(propertyId: number) {
    this.selectedProperty = propertyId;
  }

  getSelectedProperty(): number | null {
    return this.selectedProperty;
  }


}
