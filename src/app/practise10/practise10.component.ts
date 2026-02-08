import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-practise10',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './practise10.component.html',
  styleUrl: './practise10.component.scss'
})
export class Practise10Component {
  constructor(private router: Router){
  }

  homeButtonPressed(){
    this.router.navigateByUrl('/practise10')
  }

  goFirstComponent(){
    this.router.navigateByUrl('/practise10/FirstComponent')
  }

  goSecondComponent(){
    this.router.navigateByUrl('/practise10/SecondComponent')
  }
}
