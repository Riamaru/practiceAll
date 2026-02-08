import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-practise29',
  standalone: true,
  imports: [
    MatSidenavModule
  ],
  templateUrl: './practise29.component.html',
  styleUrl: './practise29.component.scss'
})
export class Practise29Component {
  side = false

  openside(){
    this.side = true
  }
}
