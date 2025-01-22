import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
  statuses = ['Available', 'Sold', 'Pending'];
  // selectedButton: string = 'Confirm';

  // selectButton(buttonType: string): void {
  //   this.selectedButton = buttonType;
  // }

  constructor(public dialogRef: MatDialogRef<EditUserComponent>) {}

  onCancel(): void {
    this.dialogRef.close(); // Close the dialog when Cancel is clicked
  }

  onConfirm(): void {
    this.dialogRef.close(); // Close the dialog when Confirm is clicked
  }
}
