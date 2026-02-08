import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { Practice27DialogComponent } from './practice27-dialog/practice27-dialog.component';


@Component({
  selector: 'app-practise27',
  standalone: true,
  imports: [
    MatButtonModule,
  ],
  templateUrl: './practise27.component.html',
  styleUrl: './practise27.component.scss'
})
export class Practise27Component {
  questTitle = '今天晚餐吃什麼？';

  userReply = ""
  readonly dialog = inject(MatDialog);
  openDialog(): void {
    const dialogRef = this.dialog.open(Practice27DialogComponent, {
      data: this.questTitle,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.userReply = result
      }
    });
  }
}
