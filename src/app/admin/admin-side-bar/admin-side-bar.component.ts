import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-side-bar',
  templateUrl: './admin-side-bar.component.html',
  styleUrls: ['./admin-side-bar.component.scss']
})
export class AdminSideBarComponent implements OnInit {
  public userRole!: string;

  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.userRole = this.authService.getUserRole();
  }
  Logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
