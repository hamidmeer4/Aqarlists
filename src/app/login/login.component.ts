import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public passwordFieldType: string = 'password';
  public eyeIcon: string = 'fa-eye';

  public togglePasswordVisibility() {
    this.passwordFieldType =
      this.passwordFieldType === 'password' ? 'text' : 'password';
    this.eyeIcon = this.eyeIcon === 'fa-eye' ? 'fa-eye-slash' : 'fa-eye';
  }
}
