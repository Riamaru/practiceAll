import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practise30',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './practise30.component.html',
  styleUrl: './practise30.component.scss'
})
export class Practise30Component {
  constructor(
    private router: Router
  ) { }

  goHome(){
  this.router.navigateByUrl('/list')
}
}
