import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent {
  statuses = ['Available', 'Sold', 'Pending'];


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditUserComponent>,
    private user: UserService,
    private toastService: ToastService,
    private loader: LoaderService
  ) {}

  onCancel(): void {
    this.dialogRef.close(); // Close the dialog when Cancel is clicked
  }

  onConfirm(): void {
    this.dialogRef.close(); // Close the dialog when Confirm is clicked
  }
  
  onDelete(): void {
    this.loader.show();
    this.user
      .deleteUserByEmail(this.data.emailAddress)
      .pipe(finalize(() => this.loader.hide()))
      .subscribe((resp) => {
        if (resp.isSuccessful) {
          this.toastService.showSuccess(
            resp.message || 'User deleted successfully!'
          );
          this.dialogRef.close(this.data);
        } else {
          this.toastService.showError(resp.message || 'Failed to delete user.');
        }
      });
  }
}
