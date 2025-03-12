import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private apiUrl = 'http://ec2-34-229-116-30.compute-1.amazonaws.com/api/Property/';
  constructor(private http: HttpClient, private authService: AuthService) { }


  getAllPropertys(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}get/all`)
  }

  sendPropertyData(propertyData: any): Observable<any> {
    const toQueryString = (obj: any): string => {
      return Object.keys(obj)
        .filter(key => obj[key] !== null && obj[key] !== undefined) // Ignore null/undefined values
        .map(key => {
          const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1); // Capitalize first letter
          return `${encodeURIComponent(capitalizedKey)}=${encodeURIComponent(obj[key])}`;
        })
        .join("&");
    };
    const token = this.authService.getToken();
    const queryParams = toQueryString(propertyData);
    const apiUrl = `${this.apiUrl}add`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // Include token in Authorization header
    });
    return this.http.post<any>(apiUrl, propertyData, { headers })
  }


}
