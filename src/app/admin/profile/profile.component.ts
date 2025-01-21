import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  profileForm: FormGroup;
  photoUrl: string = '../../../assets/svg/profile-user.svg';

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group(
      {
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        position: ['', Validators.required],
        language: ['', Validators.required],
        companyName: ['', Validators.required],
        taxNumber: ['', Validators.required],
        address: ['', Validators.required],
        aboutMe: [''],
        facebookUrl: ['', Validators.required],
        pinterestUrl: ['', Validators.required],
        instagramUrl: ['', Validators.required],
        twitterUrl: ['', Validators.required],
        linkedinUrl: ['', Validators.required],
        websiteUrl: ['', Validators.required],
        oldPassword: ['', Validators.required],
        newPassword: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordsMatch }
    );
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    } else {
      console.error('Form is invalid');
    }
  }
  passwordsMatch(group: FormGroup): { [key: string]: boolean } | null {
    const newPassword = group.get('newPassword')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : { mismatch: true };
  }

  deletePhoto() {
  }
}
