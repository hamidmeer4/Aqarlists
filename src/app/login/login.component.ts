import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';
import { finalize } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public passwordFieldType: string = 'password';
  public eyeIcon: string = 'fa-eye';
  email = '';
  password = '';
  constructor(private userService: UserService, private authService: AuthService, private router: Router, private toastService: ToastService, private loaderService: LoaderService) { }


  ngOnInit(): void { }

  public togglePasswordVisibility() {
    this.passwordFieldType =
      this.passwordFieldType === 'password' ? 'text' : 'password';
    this.eyeIcon = this.eyeIcon === 'fa-eye' ? 'fa-eye-slash' : 'fa-eye';
  }

  onLogin() {
    if (!this.email || !this.password) {
      alert('Please enter both email and password.');
      return;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(this.email)) {
      alert('Invalid email format!');
      return;
    }
    this.loaderService.show();
    this.userService.login(this.email, this.password).pipe(
          finalize(()=>    this.loaderService.hide() )
        ).subscribe(
      (resp: any) => {
        if (resp && resp.token) {
          this.authService.storeUserData(resp.token.token, resp.user);
          this.toastService.showSuccess('Login successful!');
          this.router.navigate(['/admin']);
        } else {
          this.toastService.showWarning('Invalid login response. Please try again.');
        }
      },
      (error) => {
        console.error('Login Error:', error);
        this.toastService.showError('Login failed. Please check your credentials.');
      }
    );
  }
}

