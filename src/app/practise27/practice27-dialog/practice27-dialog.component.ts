import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-practice27-dialog',
  imports: [
    MatFormFieldModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    FormsModule
  ],
  templateUrl: './practice27-dialog.component.html',
  styleUrl: './practice27-dialog.component.scss'
})
export class Practice27DialogComponent {
  readonly dialogRef = inject(MatDialogRef<Practice27DialogComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);

  userReply = ""

  onNoClick(): void {
    this.dialogRef.close();
  }

  reply(){
    this.dialogRef.close(this.userReply);
  }
}
