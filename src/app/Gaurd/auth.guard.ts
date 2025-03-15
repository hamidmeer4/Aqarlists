import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    if (authService.getUserRole() !== 'Admin' && state.url.startsWith('/admin/user')) {
      router.navigate(['/admin']);
      return false;
    }
    if((authService.getUserRole() !== 'Admin' || authService.getUserRole() !== 'Seller') && state.url.startsWith('/admin/add-property'))
    {
      router.navigate(['/admin'])
      return false;
    }
    return true;
  } else {
    router.navigate(['/home']);
    return false;
  }

};
