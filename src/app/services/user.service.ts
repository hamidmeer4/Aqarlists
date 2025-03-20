import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Role, User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://ec2-34-229-116-30.compute-1.amazonaws.com/api/User/';

  constructor(private http: HttpClient) { }


  getAllRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(`${this.apiUrl}roles/all`);
  }

  deleteUserByEmail(email: string): Observable<any> {
    const url = `${this.apiUrl}deleteUser?emailAddress=${encodeURIComponent(email)}`;
    return this.http.delete<any>(url);
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Server error:', error);
    return throwError(() => new Error('Something went wrong! Please try again later.'));
  }

  login(email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}login?emailAddress=${email}&password=${password}`;
    return this.http.get<any>(url);
  }

  register(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}registration`, user);
  }

  getAllUser(): Observable<User[]> {
    const url = `${this.apiUrl}all`;
    return this.http.get<User[]>(url);
  }
}
