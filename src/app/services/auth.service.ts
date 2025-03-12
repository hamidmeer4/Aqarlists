import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  roles: { id: number; name: string }[] = [
    { id: 1, name: 'Seller' },
    { id: 2, name: 'Buyer' },
    { id: 3, name: 'Admin' },
  ];
  constructor() { }
  storeUserData(token: string, user: any) {
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  // Get token
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Get user details
  getUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  getUserName(): string | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).name : null;
  }

  getUserRole(): string {
    const user = localStorage.getItem('user');
    if (user) {
      const roleId = JSON.parse(user)?.roleId;
      const role = this.roles?.find(r => r.id === roleId);
      return role ? role.name : 'Unknown';
    }
    return 'Unknown';
  }
  // Logout method
  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

}
