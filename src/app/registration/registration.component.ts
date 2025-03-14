import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Role, User } from '../Model/User';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';
import { LoaderService } from '../services/loader.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  user = {
    name: '',
    emailAddress: '',
    password: '',
    roleId: null,   // Default to null (or a default role ID if applicable)
    nationalId: null  // Default to null or user input
  };

  roles!: Role[];

  constructor(private userService: UserService, private authService: AuthService, private router: Router, private toastService: ToastService, private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.userService.getAllRoles().subscribe((resp: Role[]) => {
      this.roles = resp;
    },
    (error) => {
      this.toastService.showError('Failed to load roles. Please try again!.')
    });

  }
  onSubmit() {

    const userData: User = {
      emailAddress: this.user.emailAddress,
      password: this.user.password,
      name: this.user.name,
      roleId: this.user.roleId ? +this.user.roleId : 0,// Set based on user selection
      nationalId: this.user?.nationalId ? +this.user?.nationalId : 0
    };

    if (!this.user.emailAddress || !this.user.password || !this.user.roleId || !this.user.nationalId) {
      alert('Please fill all fields.');
      return;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(this.user.emailAddress)) {
      alert('Invalid email format!');
      return;
    }
    this.loaderService.show();
    this.userService.register(userData).pipe(
      finalize(()=>    this.loaderService.hide() )
    ).subscribe(
      (resp: any) => {
        if (resp && resp.token) {
          this.authService.storeUserData(resp.token.token, resp.user);
          this.toastService.showSuccess('Registration successful!');
          this.router.navigate(['/admin']);
        } else {
          this.toastService.showWarning('Invalid login response. Please try again.')
        }
      },
      (error) => {
        this.toastService.showError('Registration error. Please check your details.')
      }
    );
  }

  showSuccessMessage() {
    this.toastService.showSuccess('Data saved successfully!');
  }

  showErrorMessage() {
    this.toastService.showError('Something went wrong!');
  }

  showWarningMessage() {
    this.toastService.showWarning('This is a warning message!');
  }
}
