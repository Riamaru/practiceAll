import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-practise24',
  standalone: true,
  imports: [
    MatTabsModule,
    MatButtonModule,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './practise24.component.html',
  styleUrl: './practise24.component.scss'
})
export class Practise24Component {
  links = [
    { path: '/practise24/FirstPage', name: "First" },
    { path: '/practise24/SecondPage', name: "Second" },
    { path: '/practise24/ThirdPage', name: "Third" }
  ];
  activeLink = this.links[0].name;

}
